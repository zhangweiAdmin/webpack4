import login from '../views/login/login.vue'
import home from '../views/home/home.vue'
const routes = [
  { path: '/', component: login },
  { path: '/login', component: login },
  { path: '/home', component: home },
];
export default routes;
