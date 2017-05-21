﻿// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
let VueFire = require('vuefire')
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)
// explicit installation required in module environments
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
