<template>
  <div>
    <img class="storyBackImg" src="../../assets/imgs/bgStory.png" alt="">
    <!-- クリック  @click="関数名"-->
    <div class="strings">
      <p class="explain">ただ、世の中には
      <br><span class="s1">悪質</span>なものも多く存在し
      <br><span class="s2">禁止</span>
      <br>された広告もある。
      </p>
    </div>
    <router-link class="next" to="/Story4">次へ</router-link>
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

.strings .explain{
  font-family: "YuMincho", serif;
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 0;
  -webkit-text-stroke: 2px black;
}
.s1{
    color: black;
    font-size: 70px;
}
.s2{
    color: red;
    font-size: 70px;
}
.next{
  color: white;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>