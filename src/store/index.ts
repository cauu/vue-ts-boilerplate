declare let process: any
declare let require: any

import Vue from 'vue'
import VueX from 'vuex'

import menu from './modules/menu'

Vue.use(VueX)

const debug: boolean = process.env !== 'production'

export default new VueX.Store({
  strict: debug,
  modules: {
    menu
  }
})