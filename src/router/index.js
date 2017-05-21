import Vue from 'vue'
import Router from 'vue-router'
import showFeeds from '@/components/showFeeds'
import showHistory from '@/components/showHistory'
import eiei from '@/components/eiei'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'showFeeds',
      component: showFeeds
    },
    {
      path: '/showHistory',
      name: 'showHistory',
      component: showHistory
    },
    {
      path: '/eiei',
      name: 'eiei',
      component: eiei
    }
  ]
})
