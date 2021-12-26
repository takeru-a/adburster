<template>
  <div class="body">
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
  position: relative;
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
    position: fixed;
    left: 28%;
    top: 25%;
    margin: 0;
    display: inline-block;
}

.s2{
    font-size: 80px;
    color: red;
    position: fixed;
    left: 45%;
    top: 30%;
    margin: 0;
    display: inline-block;
}

.s3{
    font-size: 50px;
    position: fixed;
    left: 55%;
    top: 45%;
    margin: 0;
    display: inline-block;
}

.s4{
    font-size: 80px;
    position: fixed;
    left: 35%;
    top:50%;
    margin: 0;
    display: inline-block;
}

.s5{
    font-size: 50px;
    position: fixed;
    left: 45%;
    top: 62%;
    margin: 0;
    display: inline-block;
}

.next{
  color: white;
  position: fixed;
  right: 0;
  bottom: 0;
  font-size: 30px;
}

.body{
  position: fixed;
  overflow: hidden;
  width: 100%;
}

</style>
