<template>
  <div class="body">
    <img class="storyBackImg" src="../../assets/imgs/bgStory.png" alt="">
    <!-- クリック  @click="関数名"-->
    <div class="strings">
      <p class="explain"><span class="tada">ただ、</span><span class="yo">世の中には</span>
      <br><span class="akusitsu">悪質</span><span class="na">なものも多く存在し</span>
      <br><span class="kinshi">禁止</span>
      <br><span class="sa">された広告もある。</span>
      </p>
    </div>
    <router-link class="next" to="/Story4">次へ</router-link>
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

.strings .explain{
  font-family: "YuMincho", serif;
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 0;
  position: fixed;
  /* top: 200px; */
  height: 600px;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  -webkit-text-stroke: 2px black;
}

.tada{
  opacity: 0;
  animation: fadein 2s ease 0s forwards;
}
.yo{
  opacity: 0;
  animation: fadein 2s ease 1s forwards;
}
.akusitsu{
    color: red;
    font-size: 70px;
    opacity: 0;
  animation: fadein 2s ease 2s forwards;
}
.na{
  opacity: 0;
  animation: fadein 2s ease 2.5s forwards;
}
.kinshi{
    color: red;
    font-size: 70px;
    opacity: 0;
  animation: fadein 2s ease 3.5s forwards;
}
.sa{
  opacity: 0;
  animation: fadein 2s ease 4s forwards;
}
.next{
  color: white;
  position: fixed;
  right: 0;
  bottom: 0;
  font-size: 30px;
  opacity: 0;
  animation: fadein 2s ease 4s forwards;
}

.body{
  position: fixed;
  overflow: hidden;
  width: 100%;
}
@keyframes fadein {
    100% {  opacity: 1;}
}
</style>