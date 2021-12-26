<template>
  <div class="game">
    <div class="bg-image">
      <img src="../../../assets/imgs/cat.jpg" alt="">
    </div>
    <div>
       <EmergeAd></EmergeAd>
    <ExpandAd></ExpandAd>
    <SlideAd></SlideAd>
    <MovieAd></MovieAd>
    </div>
  </div>
</template>
<script>
import EmergeAd from "../../../components/game/EmergeAd";
import ExpandAd from "../../../components/game/ExpandAd";
import MovieAd from "../../../components/game/MovieAd";
import SlideAd from "../../../components/game/SlideAd";

export default {
  components: {
    EmergeAd,
    ExpandAd,
    MovieAd,
    SlideAd
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
.game {
  position: relative;
  height: 100%;
  overflow-x: hidden;
}
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -10;
}
/* .bg-image img {
  height: 100%;
  width: 100%;
} */
</style>
