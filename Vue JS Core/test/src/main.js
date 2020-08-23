import Vue from 'vue'
import Todo from './Todo.vue'

import 'materialize-css/dist/css/materialize.css'
import 'vue-material-design-icons/styles.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(Todo),
}).$mount('#app')
