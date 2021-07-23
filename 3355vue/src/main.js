import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import { Editor, Viewer } from '@toast-ui/vue-editor'
import VueSession from 'vue-session'
import VBTogglePlugin from 'bootstrap-vue'
import ModalPlugin from 'bootstrap-vue'
import FormFilePlugin from 'bootstrap-vue'
import BootstrapVueIcons from  'bootstrap-vue'
import IconsPlugin from 'bootstrap-vue'
import { JumbotronPlugin } from 'bootstrap-vue'
Vue.use(JumbotronPlugin)

import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/i18n/ko-kr'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

var sessionOptions = {
  persist: true
}

Vue.use(VueSession, sessionOptions)
Vue.use(BootstrapVue)
Vue.use(VBTogglePlugin)
Vue.use(ModalPlugin)
Vue.use(FormFilePlugin)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin)


Vue.component('Editor', Editor)
Vue.component('Viewer', Viewer)


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
