import { createRouter, createWebHistory } from 'vue-router'
import Vue from "vue";
import Router from "vue-router";
import create from '../components/SubmitForm.vue'
import View from '../components/ViewUser.vue'
import update from '../components/UserUpdate.vue'
import notFound from '../components/404Page.vue'

const routes = [
    {
      path: '/display',
      name: 'UserView',
      component: View
    },
    {
        path:'/new',
        name:'newUser',
        component:create
    },
    {
        path:'/update/:id',
        name:'updateUser',
        component:update
    },
    {
      path:'/:pathMatch(.*)*',
      component:notFound
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
  