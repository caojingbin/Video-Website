
let template = 
{
  "Identity": {
    "PeerID": "QmZENcwWxiEeUTB1ZbcYyDt55WLVH3AyErzUqKh6pqfWqv",
    "PrivKey": "CAASpwkwggSjAgEAAoIBAQDRYAR0mGs50zrsYqpn1BxtA87incabl7uZ56sFnO3TlsQEPhpQuVxcljzvT1fs0DQzWDsZYdYS3EcCJ+1fP5EAnAQo6xBJ6Dp6pRDCcbGDqb3wz9DEf67i5ef5/yFDlMYRm8r6YpSYTzgB00qu04aiIjVsHnSOmYNPkFBSHMLFLbiAwGm3bdbWV1XNr5NGLY+N8XByWUscbGNNRDRa/0BwXMd/8Qh3m+Ig+Fc8Q0vx835fhVD5bgPvAOuRee7cfkKfuWD5VVvACOiEaDviRfupSBdj76dE0gL0Ks86Xhqg2objLnsyxUD9XhngSHbuEvldazAcqXFtOqw7eOPEmjP7AgMBAAECggEAQJKQTTVEvIy8u3Kig2sTaTunbpSiUBI3tXuRbyW642q4AWb1zrecGKHtIREjWNHNh5hKgcV+tEpjS/Lsble4bKuxTL1SRLjucCzAQne1+5k6Dy7IgBGw6iFlreBVbfZQL9YQf7Avi9nCuC1l9w0dlJtgRnwODnyh1sP3QZvFJfIojLsE3XS/loR82RS7rBsjJ2cC1oS6T+DDl3ZKVvtS2gv3KwVJ6hnJSxxRCjqLdiJvOqOGS8Wfm79HvQ5nM2ZrIAZQlst3ljKDTyd93tMAzZDQoQnEzLQhyXfw+LJVlsW7/Z8XHbcn7Bj9wcAJdaB9BveXKT6XO6MxNJPn8fV04QKBgQDVDxzfhXvUkLc/USlofc6gWjh6fNgjSwD4BWhis5iunLhybtlh0E1gjwYTtJfNIQnZLBMYftapi+dnwNlyGnFblJVD/klOEB0P98KyObJFWt2VXsHAaq0ItPk66NtHzV7yPw7ixqteUsT2qNg4bTqtZ3mRYo49yBAE0vd1X/45jwKBgQD7ktQa+94VyVkd9vTbLjfu6qOacTqfRg62aTjDP+AJRczy2Bc73R1R74AeQqwU+PaMDvwQDwjlinqXd8mfVoXnhOqnU8HaSzoz0q2UhY7Nc7vyNxpFnHnOdCpNvJ8QhQOtUndijqzWhEkRC2O9i4KXjohqr37ZicckJLRXRF6w1QKBgAs9FdfQkbyfuZrUbCu/3yNkPvBvH3OVJELw/hWexaIIUE5w/HSFaV97i+WENDG02XEkOwmivy4IXDeD27SCIpKjHtCMXE+K2A2ckx+VnYq9BU04x12gAuqfqTnrSI3cDnMW0nEx6545HXypYWZwlJTLDYWWvkwR/o5Slo0ReDaPAoGBAM8DtuhxhAH3iw7eTgUilkJS8MfBDxVLiAXQtjXtFQVsW8clzJClVmA7Lfk4sfQcHn2IQyFPzeldN532o4Irp8qpFJMWmDlyl/VXEyFZefZUmz8o2sSXi6A49Sq84UOtwSXZ64W9lDp95sZQ0gWCjLb8QgNQYJjQCIAUeBYrm6P1AoGAG9vjzE/uuJzlkwFiQX79Zo1EVklt4bjIOM5Bv8abvBcNfVOz3Uy0wwew8eH+7cFxBd+ygilDKuy/kRbOLWmvOg6VwptYymPgRD9TclG3Rev32GVq9ynSt4QAfUH5si4oAH2KA4xBRRfj2l8aqPn4NW/gkclxXYApU92vKiCURRo="
  },
  "Datastore": {
    "StorageMax": "10GB",
    "StorageGCWatermark": 90,
    "GCPeriod": "1h",
    "Spec": {
      "mounts": [
        {
          "child": {
            "path": "blocks",
            "shardFunc": "/repo/flatfs/shard/v1/next-to-last/2",
            "sync": true,
            "type": "flatfs"
          },
          "mountpoint": "/blocks",
          "prefix": "flatfs.datastore",
          "type": "measure"
        },
        {
          "child": {
            "compression": "none",
            "path": "datastore",
            "type": "levelds"
          },
          "mountpoint": "/",
          "prefix": "leveldb.datastore",
          "type": "measure"
        }
      ],
      "type": "mount"
    },
    "HashOnRead": false,
    "BloomFilterSize": 0
  },
  "Addresses": {
    "Swarm": [
      "/ip4/0.0.0.0/tcp/4001",
      "/ip6/::/tcp/4001"
    ],
    "Announce": [],
    "NoAnnounce": [],
    "API": "/ip4/127.0.0.1/tcp/5001",
    "Gateway": "/ip4/127.0.0.1/tcp/8080"
  },
  "Mounts": {
    "IPFS": "/ipfs",
    "IPNS": "/ipns",
    "FuseAllowOther": false
  },
  "Discovery": {
    "MDNS": {
      "Enabled": true,
      "Interval": 10
    }
  },
  "Routing": {
    "Type": "dht"
  },
  "Ipns": {
    "RepublishPeriod": "",
    "RecordLifetime": "",
    "ResolveCacheSize": 128
  },
  "Bootstrap": [
    "/dnsaddr/bootstrap.libp2p.io/ipfs/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN",
    "/dnsaddr/bootstrap.libp2p.io/ipfs/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa",
    "/dnsaddr/bootstrap.libp2p.io/ipfs/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb",
    "/dnsaddr/bootstrap.libp2p.io/ipfs/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt",
    "/ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",
    "/ip4/104.236.179.241/tcp/4001/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM",
    "/ip4/128.199.219.111/tcp/4001/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu",
    "/ip4/104.236.76.40/tcp/4001/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64",
    "/ip4/178.62.158.247/tcp/4001/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd",
    "/ip6/2604:a880:1:20::203:d001/tcp/4001/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM",
    "/ip6/2400:6180:0:d0::151:6001/tcp/4001/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu",
    "/ip6/2604:a880:800:10::4a:5001/tcp/4001/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64",
    "/ip6/2a03:b0c0:0:1010::23:1001/tcp/4001/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd"
  ],
  "Gateway": {
    "HTTPHeaders": {
      "Access-Control-Allow-Headers": [
        "X-Requested-With",
        "Range",
        "User-Agent"
      ],
      "Access-Control-Allow-Methods": [
        "GET"
      ],
      "Access-Control-Allow-Origin": [
        "app://.",
        "*"
      ]
    },
    "RootRedirect": "",
    "Writable": false,
    "PathPrefixes": [],
    "APICommands": [],
    "NoFetch": false
  },
  "API": {
    "HTTPHeaders": {
      "Access-Control-Allow-Methods": [
        "PUT",
        "GET",
        "POST"
      ],
      "Access-Control-Allow-Origin": [
        "http://localhost:3000",
        "http://127.0.0.1:5001",
        "https://webui.ipfs.io",
        "http://localhost:8081",
        "app://.",
        "*"
      ]
    }
  },
  "Swarm": {
    "AddrFilters": null,
    "DisableBandwidthMetrics": false,
    "DisableNatPortMap": false,
    "DisableRelay": false,
    "EnableRelayHop": false,
    "EnableAutoRelay": false,
    "EnableAutoNATService": false,
    "ConnMgr": {
      "Type": "basic",
      "LowWater": 600,
      "HighWater": 900,
      "GracePeriod": "20s"
    }
  },
  "Pubsub": {
    "Router": "",
    "DisableSigning": false,
    "StrictSignatureVerification": false
  },
  "Reprovider": {
    "Interval": "12h",
    "Strategy": "all"
  },
  "Experimental": {
    "FilestoreEnabled": false,
    "UrlstoreEnabled": false,
    "ShardingEnabled": false,
    "Libp2pStreamMounting": false,
    "P2pHttpProxy": false,
    "QUIC": false
  }
}


const PeerId = require('peer-id')
const fs = require('fs')
const get = require('simple-get')
const { spawn } = require('child_process')
const homedir = require('os').homedir()
const confdir = homedir + '/.ipfs'
const confPath = confdir + '/config'
const confVersion = confdir + '/version'
const confSpec = confdir + '/datastore_spec'

function ipfsInit() {
  if (!fs.existsSync(confPath)) {
    console.log('generate keys')

    fs.mkdirSync(confdir)
    PeerId.create({ bits: 2048 }, (err, peerId) => {
      let peerid = peerId.toJSON()
      template.Identity.PeerID = peerid.id
      template.Identity.PrivKey = peerid.privKey
      fs.writeFileSync(confPath, JSON.stringify(template, null, 2))
      fs.writeFileSync(confVersion, '7')
      fs.writeFileSync(confSpec, '{"mounts":[{"mountpoint":"/blocks","path":"blocks","shardFunc":"/repo/flatfs/shard/v1/next-to-last/2","type":"flatfs"},{"mountpoint":"/","path":"datastore","type":"levelds"}],"type":"mount"}')
    })

  } else {
    console.log('keys loaded')
  }
}

function configInit() {
  let config = null

  if (fs.existsSync('.playme.json')) {
    return JSON.parse(fs.readFileSync('.playme.json'))
  }

  if (fs.existsSync(homedir + '/.playme.json')) {
    return JSON.parse(fs.readFileSync(homedir + '/.playme.json'))
  }

  return {
      "is_origin": false,
      "ipns": "",
      "ipfs_api_host": "localhost",
      "ipfs_api_port": "5001",
      "ipfs_res_url": "http://127.0.0.1:8080/ipfs/",
      "api_host": "http://139.198.177.100:4466"
    }
}

function bootstrap() {

  let ipfs_path = 
        fs.existsSync(process.resourcesPath + '/binary/ipfs') ?
        process.resourcesPath + '/binary/ipfs'
      : '/usr/local/bin/ipfs'

  console.log(ipfs_path)

  get('http://localhost:8080', function (err, res) {
    console.log(err)

    if (!err || typeof err == 'number') return

    var daemon = spawn(ipfs_path, ['daemon'])

    daemon.stdout.on('data', (data) => {
      console.log(`child process stdout: ${data}`)
    })

    daemon.stderr.on('data', (data) => {
      console.log(`child process stderr: ${data}`)
    })

    daemon.on('close', (code) => {
      console.log(`child process exited with code ${code}`)
    })

  })
}

export {ipfsInit, configInit, bootstrap}


