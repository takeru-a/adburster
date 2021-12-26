<template>
  <div class="body">
    <img class="storyBackImg" src="../../assets/imgs/bgStory.png" alt="">
    <!-- クリック  @click="関数名"-->
    <p>no.1 位置が移動する</p>
    <img class="frame" src="../../assets/imgs/frame3.png">
    <!-- <video loop autoplay muted></video> -->
    <iframe class="dummy-movie" width="560" height="315" src="https://www.youtube.com/embed/IqKz0SfHaqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <router-link class="next" to="/story5">次へ</router-link>
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
}
</style>
