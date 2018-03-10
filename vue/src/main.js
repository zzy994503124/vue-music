import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import router from './router/routes'
import 'material-design-icons/iconfont/material-icons.css'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(MuseUI)

new Vue({
  el: '#app',
  router,
  components: {App},
  render: h => h(App)
})
