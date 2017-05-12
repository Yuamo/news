import Router from 'vue-router'
import routes from './router.config'
// import fetch from '../store/fetch'
// import { localStorage } from '../lib/storage'
// const modal = weex.requireModule('modal')
// import { mapActions, mapGetters, mapState } from 'vuex'

//Vue挂载路由
Vue.use(Router)

const router = new Router({ routes })

export default router
