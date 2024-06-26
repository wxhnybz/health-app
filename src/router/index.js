import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import HealthinfoView from '../views/HealthinfoView';
import HealthfileView from '../views/HealthfileView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import NotFoundView from '../views/NotFoundView';
import AIHealthView from '../views/AIHealthView.vue';
import WechatView from '../views/WechatView.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/healthinfo',
    name: 'healthinfo',
    component: HealthinfoView
  },
  {
    path: '/healthfile',
    name: 'healthfile',
    component: HealthfileView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/aihealth',
    name: 'aihealth',
    component: AIHealthView
  },
  {
    path: '/wechat',
    name: 'wechat',
    component: WechatView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
