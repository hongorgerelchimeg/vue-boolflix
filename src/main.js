import Vue from 'vue'
import App from './App.vue'



import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar  } from '@fortawesome/free-solid-svg-icons'
import { faStar as fasStar } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

import LangFlag from 'vue-lang-code-flags';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.component('lang-flag', LangFlag);

library.add(faStar, fasStar, faMagnifyingGlass, faBell, faSortDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)




