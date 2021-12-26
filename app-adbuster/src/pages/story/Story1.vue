<template>
  <div class="body">
    <img class="storyBackImg" src="../../assets/imgs/bgStory.png" alt="">
    <!-- クリック  @click="関数名"-->
    <div class="strings">
      <h1 class="title">WEB広告</h1>
      <br>
      <div class="explain">
        <p class="s1">インターネット上において</p>
        <p class="s2">見る者の興味を引き、</p>
        <p class="s3">購入などの目的を達成するための</p>
        <p class="s4">情報伝達活動。</p>
      </div>
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


.s1{
  white-space: nowrap;
  overflow: hidden;
  /* position: absolute; */
  margin-left: auto;
  margin-right: auto;
  animation: typewriter1 1s steps(12) 1s 1 normal both,
  blinkCursor 500ms steps(12) infinite normal;
}

.s2{
  white-space: nowrap;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  animation: typewriter2 1s steps(10) 2.1s 1 normal both,
  blinkCursor 500ms steps(10) infinite normal;
}

.s3{
  white-space: nowrap;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  animation: typewriter1 1s steps(12) 3.2s 1 normal both,
  blinkCursor 500ms steps(12) infinite normal;
}
.s4{
  white-space: nowrap;
  overflow: hidden;
  animation: typewriter3 .7s steps(7) 4.4s 1 normal both,
  blinkCursor 500ms steps(7) infinite normal;
  margin-left: auto;
  margin-right: auto;
}

@keyframes typewriter1{
  from{width: 0em;}
  to{width: 12em;}
}
@keyframes typewriter2{
  from{width: 0em;}
  to{width: 10em;}
}
@keyframes typewriter3{
  from{width: 0em;}
  to{width: 7em;}
}
@keyframes blinkCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
} 

.title{
  margin: 0;
  text-decoration: 2px underline;
  text-decoration-color: white;
  text-underline-offset: 10px;
  -webkit-text-stroke: 1px #000;
  opacity: 0;
  animation: fadein 2s ease forwards;
}

@keyframes fadein {
    100% {  opacity: 1;}
}

.next{
  color: white;
  position: fixed;
  right: 0;
  bottom: 0;
  font-size: 30px;
  opacity: 0;
  animation: fadein 2s ease 5s forwards;
}

.body{
  position: fixed;
  overflow: hidden;
  width: 100%;
}

</style>
