import { createRouter, createWebHistory } from 'vue-router';

import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

function checkIfAdmin(){
  let isAdmin = cookies.get('isAdmin')
  if(isAdmin){
    return true;
  }else{
    router.push({name: 'Index'})
  }
}

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "index" */ '../views/Index.vue'),
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue'),
  },
  {
    path: '/project/:project',
    name: 'Project',
    component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue'),
  },
  {
    path: '/project/:project/edit',
    name: 'ProjectEdit',
    component: () => import(/* webpackChunkName: "adminEdit" */ '../views/AdminProject.vue'),
    beforeEnter: checkIfAdmin,
    beforeRouteUpdate: checkIfAdmin,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
  },
  {
    path: '/admin/list',
    name: 'AdminList',
    component: () => import(/* webpackChunkName: "adminList" */ '../views/AdminList.vue'),
    beforeEnter: checkIfAdmin,
    beforeRouteUpdate: checkIfAdmin,
  },
  {
    path: '/admin/add',
    name: 'AdminProject',
    component: () => import(/* webpackChunkName: "adminAdd" */ '../views/AdminProject.vue'),
    beforeEnter: checkIfAdmin,
    beforeRouteUpdate: checkIfAdmin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    window.scrollTo(0,0);
  },
});

export default router;
