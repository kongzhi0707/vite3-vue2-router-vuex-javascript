import Vue from 'vue';
import VueRouter from 'vue-router';

import routers from './modules/index';

Vue.use(VueRouter);

const routes = [...routers];

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
