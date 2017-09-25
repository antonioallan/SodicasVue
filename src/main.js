import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/model/showModal'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
