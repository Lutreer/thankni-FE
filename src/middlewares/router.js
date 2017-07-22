import Vue from 'vue'
import VueRouter from 'vue-router'

import omsPage1 from '../views/oms/page1'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/aaa',
      component: omsPage1,
      children: [
        {
          path: 'aaa1',
          component: omsPage1
        },
        {
          path: 'aaa2',
          component: omsPage1
        }
      ]
    }
  ]
})
