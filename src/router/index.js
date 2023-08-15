import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocumentosView from '../views/DocumentosView.vue'
import ServicosView from '../views/ServicosView.vue'
import AjudaView from '../views/AjudaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/docs',
      name: 'docs',
      component: DocumentosView
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: ServicosView
    },
    {
      path: '/ajuda',
      name: 'ajuda',
      component: AjudaView
    }
  ]
})

export default router
