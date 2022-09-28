import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './registerServiceWorker';

import Vue from 'vue';

import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  onSnapshot,
  selectedUser,
} from '@/Auth/index';

import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  created() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        this.$store.dispatch('ActiveUser',uid)
        onSnapshot(selectedUser("users", uid), (doc) => {
          let userRole = doc.data().role
          this.$store.dispatch('UserRole',userRole)
        })
      
      }else{
        this.$store.dispatch('RemoveUser',"")
        this.$store.dispatch('RemoveRole',"")
      }
      
    });
    
  },
  render: (h) => h(App),
}).$mount("#app");
