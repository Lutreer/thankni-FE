import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from 'views/login'
import Index from 'views/index'
import OrderIndex from 'views/order/index'
import OrderList from 'views/order/list'
import OrderDetail from 'views/order/detail'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: 'order',
      name: '订单'
    },
    {
      path: '/login',
      component: Login,
      name: '登陆'
    },
    {
      path: '/',
      component: Index,
      children: [
        {
          path: 'order',
          component: OrderIndex,
          children: [
            {
              path: 'list',
              component: OrderList
            },
            {
              path: 'detail',
              component: OrderDetail
            }

          ]
        }

      ]
    }
  ]
})
