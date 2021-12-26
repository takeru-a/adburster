import Vue from 'vue'
import Router from 'vue-router'
import SlideAd from "../components/game/SlideAd.vue"
import EmergeAd from "../components/game/EmergeAd.vue"
import ExpandAd from '../components/game/ExpandAd.vue'
import MovieAd from '../components/game/MovieAd.vue'
import TopButton from '../components/Top/TopButton.vue'
import Story1 from '../pages/story/Story1.vue'
import Story2 from '../pages/story/Story2.vue'
import Story3 from '../pages/story/Story3.vue'
import Story4 from '../pages/story/Story4.vue'
import Story5 from '../pages/story/Story5.vue'
import Story6 from '../pages/story/Story6.vue'
import Story7 from '../pages/story/Story7.vue'
import PlayScreen from '../components/Play/PlaySelect.vue'
import Dummy from '../components/ads/Dummy.vue'

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
      path: '/game/select',
      name: 'game-selct',
      component: ()=>
        import(/* webpackChunkName: "top" */"../pages/game/game-select")
    },
    {
      path: '/game/start',
      name: 'game-start',
      component: ()=>
        import(/* webpackChunkName: "top" */"../pages/game/game-start")
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
    {
      path: '/game/expand',
      name: 'expand',
      component: ExpandAd
    },
    {
      path: '/game/movie',
      name: 'movie',
      component: MovieAd
    },
    {
      path: '/game/emerge',
      name: 'topbutton',
      component: TopButton
    },
    {
      path: '/story1',
      name: 'story1',
      component: Story1
    },
    {
      path: '/story2',
      name: 'story2',
      component: Story2
    },
    {
      path: '/story3',
      name: 'story3',
      component: Story3
    },
    {
      path: '/story4',
      name: 'story4',
      component: Story4
    },
    {
      path: '/story5',
      name: 'story5',
      component: Story5
    },
    {
      path: '/story6',
      name: 'story6',
      component: Story6
    },
    {
      path: '/story7',
      name: 'story7',
      component: Story7
    },

    {
      path: '/play/playscreen',
      name: 'playscreen',
      component: PlayScreen
    },
    {
      path: '/dummy',
      name: 'dummy',
      component: Dummy
    },

  ]
})
