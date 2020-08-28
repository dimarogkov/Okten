import Vue from 'vue'
import Main from './Main.vue'

import VueMaterial from 'vue-material'
import VueResources from 'vue-resource'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(VueResources)

Vue.config.productionTip = false

Vue.http.options.root = 'https://vue-lesson-3.firebaseio.com/';

new Vue({
  render: h => h(Main),
}).$mount('#app')
