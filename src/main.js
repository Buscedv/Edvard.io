import Vue from 'vue'
import App from './App.vue'

// Router
import router from './router'

// Flexbox Grid
import 'flexboxgrid/css/flexboxgrid.css'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)


// Balloon.css
import 'balloon-css/balloon.min.css';

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Cookie Law
import CookieLaw from 'vue-cookie-law'
Vue.component('cookie-law', CookieLaw)
Vue.use(CookieLaw)

// Vue (Google) Analytics
import VueAnalytics from 'vue-analytics';
Vue.use(VueAnalytics, {
	id: 'UA-123148803-2',
	disabled: () => {
		const areCookiesDisabled = String(localStorage.getItem(CookieLaw.props.storageName.default))
		switch (areCookiesDisabled) {
			case 'true':
				return false
			case 'false':
				return true
			default:
				return false
		}
	},
	router
})

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
	mounted() {
		AOS.init();
	},
}).$mount('#app')
