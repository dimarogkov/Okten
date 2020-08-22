import Vue from 'vue'
import Form from './Form.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(Form),
}).$mount('#app')
