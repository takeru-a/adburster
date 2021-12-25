<template>
  <div>
    <img class="topBackImg" src="../../assets/imgs/topBackgroundImage.svg" alt="">
    <Header></Header>
    <h1>テスト</h1>
    <router-link to="/usage">使い方</router-link>
    <br>
    <router-link to="/game/slide">ゲーム1(少し動く)</router-link>
    <br>
    <router-link to="/game/emerge">ゲーム2(浮かび上がる)</router-link>
    <br>
    <router-link to="/game/expand">ゲーム3(広がる)</router-link>
    <br>
    <router-link to="/game/movie">動画広告</router-link>
    <TopTitle></TopTitle>
    <TopButton></TopButton>
  </div>
</template>
<script>
import Header from "../../components/Header"
import TopButton from "../../components/Top/TopButton";
import TopTitle from "../../components/Top/TopTitle"
export default {
  name: 'top',
  components: {
    Header,
    TopButton,
    TopTitle,
  }
}
</script>
<style scoped>
  .topBackImg {
    margin: 0;
    padding: 0;
    position: absolute;
    z-index: -1;
    width: 100%;
  }
</style>