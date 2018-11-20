import Vue from 'vue'
import App from './app.vue'
import router from './routers'
import './app.styl'

new Vue({
  router,
  render: h => h(App),
}).$mount('#main');
