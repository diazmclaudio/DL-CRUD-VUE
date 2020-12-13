import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import firebase from 'firebase';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions
import Element from 'element-ui'
import { firebaseConfig } from "./config/firebaseConfig";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();



Vue.use(Element)
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
