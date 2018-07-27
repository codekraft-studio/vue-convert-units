import Vue from 'vue'
import App from './App.vue'

import VueConvertUnits from './ConvertUnits'

Vue.config.productionTip = false

Vue.use(VueConvertUnits)

new Vue({
  render: h => h(App)
}).$mount('#app')
