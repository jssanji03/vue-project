import { createRouter, createWebHashHistory } from 'vue-router'
import BookList from '@/views/BookList.vue'

const routes = [
  {
    path: '/books',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/booksAdd',
    name: 'booksAdd',
    component: () => import(/* webpackChunkName: "about" */ '@/views/BookAdd.vue')
  },
  {
    path: '/books/:id',
    name: 'BookDetail',
    component: () => import(/* webpackChunkName: "about" */ '@/views/BookDetail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes:routes,
})

export default router
