import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import homeComponent from '@/components/homeComponent.vue'
import aboutComponent from '@/components/aboutComponent.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: homeComponent
  },
  {
    path:'/about',
    name: 'about',
    component: aboutComponent
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
