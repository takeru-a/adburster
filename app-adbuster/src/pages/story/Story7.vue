<template>
  <div class="body">
    <img class="storyBackImg" src="../../assets/imgs/bgStory.png" alt="">
    <!-- クリック  @click="関数名"-->
    <div class="strings">
      <p>本来見たかった
      <br><span class="mono">「モノ」</span>
      <br>がこれらにより
      <br>見えなくなっている。
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

.mono{
    font-size: 70px;
    font-weight: bold;
}

.yatsura{
    color: red;
    font-size: 60px;
    width: 300px;
}

.last{
  position: fixed;
  width: 400px;
  left: 50%;
  top: 95%;
  transform: translate(-50%, 0%);
}

.next{
  color: white;
  position: fixed;
  right: 0;
  bottom: 0;
  font-size: 30px;
}
.router-link{
  color: white;
  position: fixed;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  bottom: 0%;
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
