import app from './App.vue'
import router from './router'
// import mixins from './mixins'

import header from './components/head/header.vue'
import toggle from './components/toggle/toggle.vue'

Vue.mixin(mixins)
Vue.component('vToggle', toggle)
Vue.component('vHeader', header)

export default new Vue(
  Vue.util.extend(
    {
      el: '#root',
      router
    },
    app
  )
)
