/*
 * @Description:
 * @Autor: sj
 * @Date: 2021-11-17 09:08:49
 * @LastEditors: sj
 * @LastEditTime: 2021-11-17 15:43:26
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
  },
  {
    path: '/Home',
    name: 'Home',
    redirect: '/Home/content',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      {
        path: 'content',
        component: () =>
          import(/* webpackChunkName: "content" */ '@/views/content/index.vue'),
        name: 'content'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
