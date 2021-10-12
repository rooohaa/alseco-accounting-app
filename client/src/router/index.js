import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Dashboard from '../views/Dashboard'
import EmployeeDetails from '../views/EmployeeDetails'

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
   },
   {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
   },
   {
      path: '/employee-details/:id',
      name: 'EmployeeDetails',
      component: EmployeeDetails,
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes,
})

export default router
