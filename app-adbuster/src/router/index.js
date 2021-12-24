import Vue from 'vue'
import Router from 'vue-router'
import SlideAd from "../components/game/SlideAd.vue"
import EmergeAd from "../components/game/EmergeAd.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: ()=>
        import(/* webpackChunkName: "top" */"../pages/top")
    },
    {
      path: '/usage',
      name: 'usage',
      component: ()=>
        import(/* webpackChunkName: "top" */"../pages/usage")
    },
    {
      path: '/game/slide',
      name: 'slide',
      component: SlideAd
    },
    {
      path: '/game/emerge',
      name: 'emerge',
      component: EmergeAd
    },
  ]
})
