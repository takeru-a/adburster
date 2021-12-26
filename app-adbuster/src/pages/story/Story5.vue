<template>
  <div class="body">
    <img class="storyBackImg" src="../../assets/imgs/bgStory.png" alt="">
    <!-- クリック  @click="関数名"-->
    <p>no.2 クリック領域が変動</p>
    <img class="frame" src="../../assets/imgs/frame3.png">
    <video loop autoplay muted></video>
    <router-link class="next" to="/story6">次へ</router-link>
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

p{
  font-family: "YuMincho", serif;
  font-size: 50px;
  color: white;
  text-decoration: underline;
  position: fixed;
  left: 50%;
  top: 0%;
  transform: translate(-50%, 0%);
}
.next{
  color: white;
  position: fixed;
  right: 0;
  bottom: 0;
  font-size: 30px;
}

.frame{
  width: 60%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.dummy-movie{
  position: fixed;
  left: 24%;
  top: 17%;
  width: 52%;
  height: 66%;
}

.body{
  position: fixed;
  overflow: hidden;
  width: 100%;
}
</style>
