import Vue from 'vue'
import Router from 'vue-router'
const find = () => import ('../components/content/find.vue')
const appContent = () => import ('../components/content/content.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: appContent
    }, {
      path: '/find',
      component: find,
      name: 'find'
    }, {
      path: '/content',
      component: appContent,
      name: 'content'
    }
  ]
})
