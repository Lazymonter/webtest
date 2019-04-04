// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//element-ui --------------------------
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import VueSocketio from 'vue-socket.io';
import 'xterm/dist/xterm.css'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import allconfig from "./utils/allconfig.js"
Vue.prototype.$ALLCONFIG=allconfig;

Vue.use(iView);

Vue.prototype.$echarts = echarts 
Vue.use(ElementUI);
//element-ui --------------------------
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
