import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const markdown = r => require.ensure([], () => r(require('@/page/markdown')), 'markdown');
const t = r => require.ensure([], () => r(require('@/page/t')), 't');

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/edit',
    component: markdown
  },
  {
    path: '/t',
    component: t
  }
]

export default new Router({
  routes
})
