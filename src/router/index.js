import Vue from 'vue'
import vueRouter from 'vue-router'
import goods from '../components/goods/goods'
import seller from '../components/seller/seller'
import ratings from '../components/ratings/ratings'
Vue.use(vueRouter)
const routes = [{
  path: '/seller',
  component: seller
},
{
  path: '/goods',
  component: goods
},
{
  path: '/ratings',
  component: ratings
}
]
// eslint-disable-next-line new-cap
const router = new vueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
})
export default router
