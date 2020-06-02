import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
//import Home from '@/components/Home'
import Loading from '@/components/Loading'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '/',
    name: 'loading',
    component: Loading
  }, {
    path: '/home',
    name: 'home',
    component: () => import('@/components/Home')
  }]
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
