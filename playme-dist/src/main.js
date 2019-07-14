import Vue from 'vue'
import App from './App.vue'

import { remote } from 'electron'

remote.globalShortcut.register('CommandOrControl+Shift+K', () => {
  remote.BrowserWindow.getFocusedWindow().webContents.openDevTools()
})

window.addEventListener('beforeunload', () => {
  remote.globalShortcut.unregisterAll()
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
