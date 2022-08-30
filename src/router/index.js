import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/addreg',
    name: 'addreg',
    component: () => import('../views/AddReg.vue'),
    meta: {protegida: true}
  },
  {
    path: '/viewreg',
    name: 'viewreg',
    component: () => import('../views/viewReg.vue'),
    meta: {protegida: true}
  },
  {
    path: '/inforeg/:id',
    name: 'inforeg',
    component: () => import('../views/infoReg.vue'),
  },
  {
    path: '/editreg/:id',
    name: 'editreg',
    component: () => import('../views/editReg.vue'),
    meta: {protegida: true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=> {
  if (to.meta.protegida) {
    if(store.getters.userAuth){
      next()
    }else{
      next('/login')
      alert("Permiso denegado. Inicia sesion.")
    }
  } else {
    next()
  }
})

export default router
