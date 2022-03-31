import Vue from 'vue'
import App from './App.vue'




import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar  } from '@fortawesome/free-solid-svg-icons'
import { faStar as fasStar } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import LangFlag from 'vue-lang-code-flags';

library.add(faStar, fasStar, faMagnifyingGlass, faBell, faSortDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('lang-flag', LangFlag);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')





