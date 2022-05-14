import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import depList from '../cmps/dep/dep-list.vue'
import empList from '../cmps/emp/emp-list.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/company/:id',
      component: () => import('../views/company-app.vue'),
      children: [
        {
          path: 'department',
          component:depList
        },
        {
          path: 'employee',
          component:empList
        }
      ]
    }
  ]
})

export default router
