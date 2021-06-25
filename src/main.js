import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueMask from 'di-vue-mask'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.config.useEslint = false

Vue.use(Vuelidate)
Vue.use(VueMask)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
