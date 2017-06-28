declare var require: any

import Vue from 'vue';
import Router from 'vue-router'

/**
 * @desc import vue single file component
 */
const App = require('pages/app').default
const DashBoard = require('pages/dash-board').default

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/dashboard',
          component: DashBoard
        }
      ]
    }
  ]
});