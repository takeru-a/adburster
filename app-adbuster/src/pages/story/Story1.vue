<template>
  <div>
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
  position: absolute;
  z-index: -1;
  width: 100%;
}

.strings{
  font-family: "YuMincho", serif;
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.title{
  margin: 0;
  -webkit-text-stroke: 2px #000;
}

.next{
  color: white;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
