// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap'
import Vue from 'vue'
import App from './App'
import router from './router'
import StoryblokVue from 'storyblok-vue'
import Root from '@/components/Root'
import Navbar from '@/components/Navbar'
import Teaser from '@/components/Teaser'
import SiteFooter from '@/components/SiteFooter'

Vue.config.productionTip = false

Vue.use(StoryblokVue)

Vue.component('root', Root)
Vue.component('navbar', Navbar)
Vue.component('teaser', Teaser)
Vue.component('site_footer', SiteFooter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
