import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'common/js/axios'
import Lazyload from 'vue-lazyload'
import fastclick from 'fastclick'
import 'common/styles/index.styl'
Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.use(Lazyload, {
  loading: require('common/img/default.png')
})

fastclick.attach(document.body)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
