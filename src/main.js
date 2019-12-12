import Vue from 'vue'
import App from './App.vue'
import './plugins/video';
// import router from './router'
import store from './store'
import './plugins/element.js'
// import './plugins/socket'
import './style/global.css'
import './plugins/drag'
import './plugins/event'

Vue.config.productionTip = false

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#hios')
