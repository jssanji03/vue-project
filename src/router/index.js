import { createRouter, createWebHashHistory } from 'vue-router'
import BookList from '../views/BookList.vue'

const routes = [
  {
    path: '/books',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/books/:bookId',
    name: 'BookDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BookDetail .vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
