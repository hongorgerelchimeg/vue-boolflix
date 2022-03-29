import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.component('lang-flag', LangFlag);
