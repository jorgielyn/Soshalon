import Vue from 'vue';
import App from 'src/App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from 'router';
// swall fire
import VueSweetalert2 from 'vue-sweetalert2';
 
// If you don't need the styles, do not connect
import 'sweetalert2';
 // to use the swal fire
Vue.use(VueSweetalert2);

Vue.config.productionTip = false
Vue.use(BootstrapVue);


new Vue({
  render: h => h(App),
  router: router,
  template: '<router-view></router-view>'
}).$mount('#app')
