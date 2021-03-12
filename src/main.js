import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueMobileDetection from "vue-mobile-detection"
import 'aos/dist/aos.css'
import AOS from 'aos'


import router from './router';
import { store } from './store'

Vue.config.productionTip = false

import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(VueMobileDetection)
AOS.init()


axios.defaults.baseURL = 'https://docs-api.bahtera.tech' // eslint-disable-line

// TODO: handle if no connection to server or internet
const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTE2NDU1OTEsIm5iZiI6MTYxMTY0NTU5MSwianRpIjoiN2I4MzRjZmUtY2IxMy00YjE4LWFjZGYtZWM2N2QzMjdiNWQ1IiwiaWRlbnRpdHkiOiJBZG1pbiIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7InVzZXJpZCI6MSwiZ3JvdXBzIjpbIlN1cGVyIEFkbWluaXN0cmF0b3IiXX19.c3BmGCMH01aYme60dYZh9l2LFkdjvZ2LaI-g6yd6d20'
axios.interceptors.request.use(config => {
  config.headers["Authorization"] = token
  config.headers["Access-Control-Allow-Origin"] = "*"
  return config;
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
