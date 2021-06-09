import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '../view/HelloWorld.vue'
import viewIndex from '../view/viewIndex'


const routes = [
    {
      path: '/',
      redirect: '/hello'
    },
    {
        path: '/hello',
        component: HelloWorld,
        children: viewIndex.routes
    },
    {
      path: '/**',
      redirect: '/hello'
    }
  ]

  const router  = createRouter({
    history: createWebHashHistory(),
    routes
 })

export default router