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
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: () => import( '../views/Confirm.vue')
  },
  {
    path: '/authorisation',
    name: 'ConfirmAuthor',
    component: () => import( '../views/ConfirmAuthor.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router