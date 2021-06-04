import Vue from 'vue'
import vuetify from './plugins/vuetify';

import router from './router'

import store from './store'

import App from './App.vue'

/*生产环境中要注释掉mock.js*/
import './mock/mock.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
