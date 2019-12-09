import Vue from 'vue'
import App from './App.vue'
import './plugins/video';
// import router from './router'
import store from './store'
import './plugins/element.js'
import './style/global.css'
import './plugins/drag'

Vue.config.productionTip = false

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#hios')
