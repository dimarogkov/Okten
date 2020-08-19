import Vue from 'vue'
import Rogkov from './Rogkov.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Rogkov),
}).$mount('#app')
