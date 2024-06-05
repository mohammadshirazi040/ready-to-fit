import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OfferView from '../views/OfferView.vue'
import FormView from '../views/FormView.vue'
import UserView from '../views/UserView.vue'
import LoginView from '../views/LoginView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/offer',
      name: 'OfferView',
      component: OfferView
    },
    {
      path: '/form',
      name: 'FormView',
      component: FormView
    },
    {
      path: '/user',
      name: 'UserView',
      component: UserView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    }
  ]
})

export default router
