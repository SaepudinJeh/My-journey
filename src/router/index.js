import { createRouter, createWebHistory } from 'vue-router';

import Act1 from '../components/Act-1/Main.vue';

const routes = [
  {
    path: '/',
    name: 'act-1',
    component: Act1
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;