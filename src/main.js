import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './routes';
import './directives/model/showModal'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
Vue.use(VueResource);
Vue.http.options.root = "http://localhost:8080/v1";
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode : 'history'
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
