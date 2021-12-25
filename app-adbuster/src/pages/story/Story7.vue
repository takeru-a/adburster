<template>
  <div>
    <img class="storyBackImg" src="../../assets/imgs/bgStory.png" alt="">
    <!-- クリック  @click="関数名"-->
    <div class="strings">
      <p>本来見たかった
      <br><span class="mono">「モノ」</span>
      <br>がこれらにより
      <br>見えなくなっている。
      </p>
      <p><span class="yatsura">やつら</span>を消せ。</p>
    </div>
    <router-link class="router-link" to="/game/emerge">プレイする</router-link>
    <br>
    <router-link class="next" to="/">ホームへ</router-link>
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

.strings p{
  font-family: "YuMincho", serif;
  font-size: 50px;
  color: white;
  text-align: center;
  font-weight: bold;
  margin: 0;
  -webkit-text-stroke: 2px #000;
}

.mono{
    font-size: 70px;
    font-weight: bold;
}

.yatsura{
    color: red;
    font-size: 60px;
}

.next{
  color: white;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
