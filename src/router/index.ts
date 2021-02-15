import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import LogIn from '../views/LogIn.vue';
import ActualHome from '../views/ActualHome.vue';
import ForgotPassword from '../views/ForgotPassword.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/ActualHome',
    name: 'actualHome',
    component: ActualHome
  },
  {
    path: '/LogIn',
    name: 'login',
    component: LogIn
  },
  {
    path: '/ForgotPassword',
    name: 'forgot-password',
    component: ForgotPassword
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
