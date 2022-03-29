import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar  } from '@fortawesome/free-solid-svg-icons'
import { faStar as fasStar } from '@fortawesome/free-regular-svg-icons'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.component('lang-flag', LangFlag);

library.add(faStar, fasStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)


