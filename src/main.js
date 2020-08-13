import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Loading from '@/components/Loading'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  scrollBehavior: function(to) {
    if(to.hash) {
      return {selector: to.hash}
    }else {
      return {x : 0, y: 0}
    }
  },
  routes: [{
    path: '/',
    name: 'loading',
    component: Loading
  }, {
    path: '/main',
    name: 'main',
    component: () => import('@/sections/Main')
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import('@/sections/Archive')
  }
]
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
