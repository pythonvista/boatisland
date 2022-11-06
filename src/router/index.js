import Vue from 'vue';

import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Onboarding from '../views/onboarding.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'onboarding',
    component: Onboarding
  },
  {
    path: '/home',
    component: Home,
    children: [
       {
      path: '',  // default view
      name: 'home',
      // meta: { requiresAuth: true },
      component: () =>
        import(
          /* webpackChunkName: "profile" */ '@/components/home/index.vue'
        ),
    },
    {
      path: '/explore',  // default view
      name: 'explore',
      // meta: { requiresAuth: true },
      component: () =>
        import(
          /* webpackChunkName: "profile" */ '@/components/home/explore.vue'
        ),
    },
    {
      path: '/libary',  // default view
      name: 'libary',
      // meta: { requiresAuth: true },
      component: () =>
        import(
          /* webpackChunkName: "profile" */ '@/components/home/libary.vue'
        ),
    },
    {
      path: '/profile',  // default view
      name: 'profile',
      // meta: { requiresAuth: true },
      component: () =>
        import(
          /* webpackChunkName: "profile" */ '@/components/home/profile.vue'
        ),
    },
  ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: { requiresGuest: true },
    component: () =>
      import(
        /* webpackChunkName: "profile" */ '@/components/home/Login.vue'
      ),
  },
 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});



export default router;
