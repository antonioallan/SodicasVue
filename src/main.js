import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './routes';
import VeeValidate from 'vee-validate';
import './directives/model/showModal';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import SecurityService from './domain/seguranca/SecurityService';
import {HEADER_AUTH} from './domain/seguranca/SecurityConstants';
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});
Vue.use(VueResource);
Vue.http.options.root = "http://localhost:8080/v1";
const securityService = new SecurityService(Vue.http,Vue.router)
securityService.install = function(){
  Object.defineProperty(Vue.prototype, '$securityService', {
    get () { return securityService }
  })
}

Vue.use(securityService)
Vue.use(VeeValidate)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
