<template>
  <div class="game">
    <EmergeAd></EmergeAd>
    <ExpandAd></ExpandAd>
    <SlideAd></SlideAd>
    <MovieAd></MovieAd>
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
  background-image: url("../../../assets/imgs/cat.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
}
</style>
