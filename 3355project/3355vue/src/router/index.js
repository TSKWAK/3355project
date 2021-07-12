import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //-------- Main Page ----------//
  { path: '/', name: 'Main', component: () => import('@/components/main/Main.vue') },


  //-------- Board Page -----------//
  { path: '/board/*', name: 'list', component: () => import('@/components/board/BoardList.vue') },
  { path: '/detail', name: 'detail', component: () => import('@/components/board/BoardDetail.vue') },
  { path: '/write', name: 'write', component: () => import('@/components/board/BoardWrite.vue') },


  //--------- User Page ------------//
  { path: '/join', name: 'joing', component: () => import('@/components/user/Join.vue') },
  { path: '/login', name: 'login', component: () => import('@/components/user/Login.vue') },

];





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
