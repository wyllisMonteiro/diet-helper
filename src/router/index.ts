import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CaloricNeedView from '../views/CaloricNeedView.vue'
import MacroNutrientsNeedView from '../views/MacroNutrientsNeedView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/caloric-need',
    name: 'caloric-need',
    component: CaloricNeedView
  },
  {
    path: '/macronutrients-need',
    name: 'macronutrients-need',
    component: MacroNutrientsNeedView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
