/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import AtividadeForm from '../components/AtividadeForm.vue'
import AtividadeList from '../components/AtividadeList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/nova-atividade',
    name: 'Nova Atividade',
    component: AtividadeForm
  },

  {
    path: '/minhas-atividades',
    name: 'Minhas Atividades',
    component: AtividadeList
  }
]

const router = new VueRouter({
  routes
})

export default router
