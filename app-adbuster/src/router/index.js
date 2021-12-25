import Vue from 'vue'
import Router from 'vue-router'
import SlideAd from "../components/game/SlideAd.vue"
import SpringAd from "../components/game/SpringAd.vue"

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
      path: '/game/spring',
      name: 'spring',
      component: SpringAd
    },
  ]
})
