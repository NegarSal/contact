import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddContact  from '../components/AddContact.vue'
import UpdateContact  from '../components/UpdateContact.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
  
  },
  {
    path: '/addContact',
    name: 'AddContact',
    component: AddContact
  
  },
  {
    path: '/updateContact',
    name: 'UpdateContact',
    component: UpdateContact
  
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
