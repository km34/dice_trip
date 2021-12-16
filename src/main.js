import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import axios from 'axios'

import { initializeApp } from "firebase/app";

Vue.prototype.$axios = axios
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "xxxx",
  authDomain: "xxxx",
  projectId: "xxxx",
  storageBucket: "xxxx",
  messagingSenderId: "xxxx",
  appId: "xxxx",
  measurementId: "xxxx"
};

// Initialize Firebase
initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
