<template>
  <div class="body">
    <img class="storyBackImg" src="../../assets/imgs/bgStory.png" alt="">
    <!-- クリック  @click="関数名"-->
    <div class="strings">
      <h1 class="title">WEB広告</h1>
      <br>
      <p class="explain">インターネット上において
      <br>見る者の興味を引き、
      <br>購入などの目的を達成するための
      <br>情報伝達活動。
      </p>
    </div>
    <router-link class="next" to="/story2">次へ</router-link>
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
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 700px;
  width: 1000px;
}

.title{
  margin: 0;
  text-decoration: 2px underline;
  text-decoration-color: white;
  text-underline-offset: 10px;
  /* text-decoration-width: 1px; */
  -webkit-text-stroke: 1px #000;
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
