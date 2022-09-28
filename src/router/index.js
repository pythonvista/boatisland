import Vue from 'vue';

import VueRouter from 'vue-router';

import Admin from '../views/Admin.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { requiresAdminAuth: true },
    children: [ {
      path: '',  // default view
      name: 'dashboard',
      // meta: { requiresAuth: true },
      component: () =>
        import(
          /* webpackChunkName: "profile" */ '@/components/admin/dashboard.vue'
        ),
    },]
  },

  {
    path: '/login',
    name: 'Login',
    meta: { requiresGuest: true },
    component: () =>
      import(
        /* webpackChunkName: "profile" */ '@/components/Login.vue'
      ),
  },
 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});



export default router;
