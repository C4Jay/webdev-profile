import Vue from 'vue'
import App from './App.vue'
import VideoBg from 'vue-videobg'
import vuetify from './plugins/vuetify';
import router from './router'
import VuePageTransition from 'vue-page-transition'
 
Vue.use(VuePageTransition)
Vue.component('video-bg', VideoBg)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
