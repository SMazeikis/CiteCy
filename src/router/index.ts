import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';
import Home from '../views/Home.vue';
import ForgotPassword from '../views/ForgotPassword.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
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
