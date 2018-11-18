import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import HighchartsVue from 'highcharts-vue'

Vue.use(VueResource);
Vue.use(HighchartsVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
