<template>
  <div id="app">

    <header role="banner">
      <div class="container">
        <h1>IPFS Video Streaming</h1>
        <p>Yet another lightweight, decentralized video streaming app.</p>
      </div>
    </header>

    <nav role="navigation" class="top-nav top-nav-light cf main-nav">
    <input id="menu-toggle" type="checkbox" class="menu-toggle">
    <label for="menu-toggle">Menu</label>
    <ul class="list-unstyled list-inline cf">
      <li><a href="#status">status</a></li>
      <li><a href="#dropzone">upload</a></li>
      <li><a href="#filelist">files</a></li>
      <li><a href="#play">play</a></li>
    </ul>
  </nav>

    <div class="zone-wrapper" style="width: 100%;">
      <div>本地节点信息</div>

      <div id="status">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>item</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#</td>
              <td>node id</td>
              <td>{{info && info.id}}</td>
            </tr>
            <tr>
              <td>#</td>
              <td>public key</td>
              <td>{{info && info.publicKey}}</td>
            </tr>

            <tr v-for="address in info.addresses">
              <td>#</td>
              <td>address</td>
              <td><div>{{address}}</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="is_origin" class="zone-wrapper" style="width: 100%;">
      <div>拖放上传文件</div>
      <div id="dropzone" style="width: 200px; height: 200px; border: 1px solid black;margin-left: auto; margin-right: auto;">
        <div style="width: 100%; height: 100%; line-height: 200px; text-align: center;">Drop mp4 file here</div>
      </div>
      <br>
      <form>
        <div v-if="true">dropped: {{dropped.hash}}</div>
        <input type="text" id="filename" placeholder="file name" v-model="targetfilename" />
        <button id="goAddFile" @click.prevent="doAddFile">add file</button>
      </form>
    </div>

    <div class="zone-wrapper" style="width: 100%;">
      <div id="filelist">
        <div>本地文件列表</div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>item</th>
              <th>name</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="file in localfiles">
              <td>#</td>
              <td>{{file.hash}}</td>
              <td>{{file.name}}</td>
              <td><button @click='playVideo(file.hash)'>play</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="zone-wrapper" style="width: 100%;">
      <div>视频播放</div>

      <div id="play">
          <form>
            <input type="text" id="hash" placeholder="Hash" v-model="targethash" />
            <button id="gobutton" @click.prevent="doPlayHash">Play</button>
          </form>

          <video id="video" controls></video>
      </div>
    </div>
  </div>
</template>

<style type="text/css">
.zone-wrapper {
  margin-top: 50px;
  margin-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>

<script>
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch'
const dragDrop = require('drag-drop')
const fs = require('fs')
const prisma = require('./prisma-client.js').default

const {ipfsInit, configInit, bootstrap } = require('./loader')
console.log('loader', ipfsInit())
const config = configInit()
setTimeout(() => {
  bootstrap()
}, 1000)

var Ipfs = require('ipfs-http-client')
var node = window.ipfs = Ipfs(config.ipfs_api_host, config.ipfs_api_port, { protocol: 'http' })
var log = console.log
var rootkey = 'QmdyfVGayRmMAPn2W9uVZF45TGtwqawi66u3XCcLMvLFhm'


export default {
  name: 'app',
  components: {
  },
  data() {
    setTimeout(() => {
      prisma
        .resources()
        .then(res => {
          console.log('loaded resources', res)
          this.localfiles = res
        })
        .catch(e => console.error(e))

      var addr = '/ip4/139.198.177.100/tcp/4001/ipfs/QmZtFJLym7V68V3w2sG9bxwkaWfWCxivbLqJxWF8pYAQN6'
      node.swarm.connect(addr, console.log)

    } ,2000)

    setInterval(() => {
      prisma
        .resources()
        .then(res => {
          // console.log('loaded resources', res)
          this.localfiles = res
        })
        .catch(e => console.error(e))
    } ,20000)

    return {
      info: {},
      localfiles: [],
      dropped: {hash: ''},
      targethash: '',
      targetfilename: '',
      is_origin: config.is_origin,
    }
  },
  methods: {
    doPlayHash() {
      // QmfATQNSR2sbFAQwfgycZyzXqYcAT4TXPSeyyMTjekaUR9
      console.log('playing', this.targethash)
      let filehash = this.targethash

      const video = document.querySelector('#video')
      video.src = config.ipfs_res_url + filehash
      video.addEventListener('error', (err) => { log(err) })
      console.log(video.src)
      video.play()
    },

    doGet() {
      // console.log('.')
      // node.get("QmfATQNSR2sbFAQwfgycZyzXqYcAT4TXPSeyyMTjekaUR9", console.log)
    },

    doAddFile() {
      let obj = this.dropped
      obj.name = this.targetfilename
      this.dropped = {hash: ''}
      this.localfiles.push(obj)
      console.log('the obj', obj)

      prisma.createResource(obj)
        .then(res => {
          console('ok')
        })
        .catch(e => console.error(e))

      // console.log(this.localfiles)
      // console.log(this.targetfilename)
      // db.write('localfiles', this.localfiles)
      // let newstate = JSON.stringify(this.localfiles, null, 2)
      // console.log(Ipfs.Buffer.from(newstate))
      // node.add(Ipfs.Buffer.from(newstate), (err, res) => {
      //   console.log(res[0].hash)
      //   let newhash = res[0].hash
      //   console.log('latest state', newhash)
      //   node.name.publish(newhash, (err, res) => {
      //     console.log(err, res)
      //   })
      // })
    },

    playVideo(filehash) {
      const video = document.querySelector('#video')
      video.src = config.ipfs_res_url + filehash
      video.addEventListener('error', (err) => { log(err) })
      console.log(video.src)
      video.play()
    },
  },

  created() {
    console.log('started')
    window.app = this
    node.name.resolve('QmW8KPhqrk4okFaDJ71FEA8z5mUJywLGg4xRuh3G4e5E7c', function (err, name) {
        console.log('resolved', name)
        node.get(name, function (err, content) {
          console.log('resolved content', content)
        })
    })

    node.id().then(res => {
      this.info.id = res.id
      this.info.publicKey = res.publicKey
      this.info.addresses = res.addresses
      console.log('loaded', res)
    })
  },

  mounted() {
    let app = this
    if (!this.is_origin) return;

    document.getElementById('dropzone').ondragstart = (event) => {
      event.preventDefault()
    }
    dragDrop('#dropzone', async (files, pos, fileList, directories) => {
      console.log('Here are the dropped files', files)

      let file = files[0]
      let filepath = files[0].path
      let addfile
      addfile = await ipfs.add([{path: file.name, content: fs.createReadStream(filepath)}])
      console.log('addfile', addfile, ' ',  file)
      app.dropped = {
        name: addfile[0].path,
        hash: addfile[0].hash,
        size: addfile[0].size,
        filetype: 'mp4',
      }
      app.targetfilename = addfile[0].path
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
