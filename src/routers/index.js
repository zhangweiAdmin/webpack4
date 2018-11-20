import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './route'
Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes // 必须这么写否则导入不进去...
});
export default router


