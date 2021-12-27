<template>
  <div class="body">
    <img class="storyBackImg" src="../../assets/imgs/bgStory.png" alt="">
    <!-- クリック  @click="関数名"-->
    <div class="strings">
      <p><span class="ho">本来見たかった</span>
      <br><span class="mono">「モノ」</span>
      <br><span class="ga">がこれらにより</span>
      <br><span class="mi">見えなくなっている。</span>
      <br>
      <span class="last"><span class="yatsura">やつら</span>を消せ。</span></p>
    </div>
    <router-link class="router-link" to="/game/select">
          <button @click="page" class="Bigbutton">{{play}}</button>
    </router-link>
    <br>
    <router-link class="next" to="/">ホームへ</router-link>
  </div>
</template>

<script>
export default {
  name: "topbutton",
  components: {
    
  },
  data() {
    return {
      play: "プレイする",
    };
  },
  methods: {
    page() {
      
    },
  }
};
</script>

<style scoped>
.storyBackImg{
  margin: 0;
  padding: 0;
  position: relative;
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
  position: fixed;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0%);
  height: 400px;
  -webkit-text-stroke: 1px #000;
}

.ho{
  opacity: 0;
  animation: fadein 2s ease 0s forwards;
}

.mono{
    font-size: 70px;
    font-weight: bold;
    opacity: 0;
  animation: fadein 2s ease 1s forwards;
}

.ga{
  opacity: 0;
  animation: fadein 2s ease 1s forwards;
}

.mi{
  opacity: 0;
  animation: fadein 2s ease 2s forwards;
}

.yatsura{
    color: red;
    font-size: 80px;
    width: 300px;
}

.last{
  position: fixed;
  width: 100%;
  font-size: 60px;
  left: 0%;
  top: 95%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transform: scale(0);
  animation: scale 1s ease 3s forwards;
  /* animation: fadein 2s ease 3s forwards; */
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
.router-link{
  color: white;
  position: fixed;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  bottom: 0%;
}

@keyframes fadein {
    100% {  opacity: 1;}
}
@keyframes scale {
    100% {transform: scale(1);}
    100% {  opacity: 1;}
}

  @import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
  .wrapper {
      font-family: 'Potta One', cursive;
  }
  .Bigbutton {
    display: block;
    justify-content: space-between;
    align-items: center;
    margin: 1.5% auto;
    padding: 0.7em 0.4em;
    width: 350px;
    color: #fff;
    text-align: center;
    font-weight: 800;
    font-size: 2.3em;
    letter-spacing: 0.3em;
    box-shadow: 0px 1px 1px 1px rgba(0 0 0 / .4);
    border: 3px solid #111;
    border-radius: 8px;
    transition: 0.3s;
    background-color: #AF0000;
    opacity: 0;
  animation: fadein 2s ease 4s forwards;
  }
  .Bigbutton:hover {
    text-decoration: none;
    background-color: #770000;
    box-shadow: 0 0 10px rgba(0 0 0 /0);
  }
  .router-link {
    position: fixed;
    text-decoration: none;
  }

  .body{
    position: fixed;
    overflow: hidden;
    width: 100%;
  }
</style>
