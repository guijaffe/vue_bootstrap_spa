import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import( '../views/Main.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/SignIn.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/SignUp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router