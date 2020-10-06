import Vue from 'vue'
import App from './App.vue'
import Api from './entities/Api'
Vue.config.productionTip = false

const api = new Api()
export default api

new Vue({
  render: h => h(App),
}).$mount('#app')
