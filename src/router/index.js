import { createRouter, createWebHistory } from 'vue-router';

import Index from '../views/Index.vue';

import List from '../views/List.vue';

import Project from '../views/Project.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
  {
    path: '/project/:project',
    name: 'Project',
    component: Project,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
