import Vue from 'vue'
import vuetify from './plugins/vuetify';

import router from './router'

import App from './App.vue'

/*生产环境中要注释掉mock.js*/
import './mock/mock.js'

//Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
