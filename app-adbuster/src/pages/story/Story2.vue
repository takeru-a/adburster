<template>
  <div>
    <img class="storyBackImg" src="../../assets/imgs/bgStory.png" alt="">
    <!-- クリック  @click="関数名"-->
    <div class="strings">
      <p class="s1">いかにして
      <p class="s2">クリック</p>
      <p class="s3">を誘うかが</p>
      <p class="s4">カギ</p>
      <p class="s5">なのだ。</p>
    </div>
    <router-link class="next" to="/story3">次へ</router-link>
  </div>
</template>

<style scoped>

.storyBackImg{
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: -1;
  width: 100%;
}

.strings{
  font-family: "YuMincho", serif;
  color: white;
  font-weight: bold;
  height: 100px;
  -webkit-text-stroke: 1px #000;
}

.s1{
    font-size: 50px;
    position: relative;
    left: 30%;
    margin: 0;
}

.s2{
    font-size: 70px;
    color: red;
    position: relative;
    left: 50%;
    margin: 0;
}

.s3{
    font-size: 50px;
    position: relative;
    left: 70%;
    margin: 0;
}

.s4{
    font-size: 70px;
    position: relative;
    left: 35%;
    margin: 0;
}

.s5{
    font-size: 50px;
    position: relative;
    left: 45%;
    margin: 0;
}

.next{
  color: white;
  position: absolute;
  right: 0;
  bottom: 0;
}

</style>
