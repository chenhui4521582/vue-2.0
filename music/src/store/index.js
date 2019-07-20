import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import logger from 'vuex/dist/logger'

Vue.use(Vuex)
let isDev = process.env.NODE_ENV != 'production'
let store = new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: isDev ? [logger()] : []
})
export default store
