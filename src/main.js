import Vue from 'vue'
import App from './App.vue'
import dotenv from "dotenv"
import router from './router'
import Grid from 'gridjs-vue'
import VueSimpleAlert from "vue-simple-alert";

dotenv.config()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(Grid)
Vue.use(VueSimpleAlert)
