<template>
  <div>
    <img class="storyBackImg" src="../../assets/imgs/bgStory.png" alt="">
    <!-- クリック  @click="関数名"-->
    <p>no.2 クリック領域が変動</p>
    <video loop autoplay muted></video>
    <router-link class="next" to="/story6">次へ</router-link>
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

p{
  font-family: "YuMincho", serif;
  font-size: 50px;
  color: white;
  text-align: center;
  text-decoration: underline;
  margin: 0;
}
.next{
  color: white;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
