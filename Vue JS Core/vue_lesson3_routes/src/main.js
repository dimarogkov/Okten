import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import {routes} from '@/routes'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VueResources from 'vue-resource'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueResources);

Vue.config.productionTip = false

Vue.http.options.root = 'https://vue-lesson-3.firebaseio.com/';

const router = new VueRouter ({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
