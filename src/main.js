// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
// import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';

import Vue from 'vue';
import VueSwal from 'vue-swal';
import vuetify from './plugins/vuetify';
// import App from './App_vuetify-theme';
import App from './App';
import router from './router';

Vue.use(BootstrapVue);
Vue.use(VueSwal);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify,
  router,
  components: { App },
  template: '<App/>',
});
