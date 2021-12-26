<template>
  <div class="select">
    <div class="asideArea">
      <router-link to="/">
        <img id="" src="../../assets/imgs/dashicons_arrow-left-alt2.svg" alt="">
      </router-link>
      <div class="userArea">
        <img src="../../assets/imgs/userImage.svg" alt="">
        <h1>UserName</h1>
        <p><span>Lv.</span>{{userLevel}}</p>
      </div>
    </div>
      <div class="selectWrap">
      <div id="select" class="selectArea">
        <h2 class="levelText one">ウザさLv.1</h2>
        <router-link class="router-link" to="/game/start">
          <div id="mosaic" class="mosaic">
            <img class="selectImage" width="270" src="../../assets/imgs/ad-example.gif" alt="">
            <p class="selectText">位置が移動する広告</p>
          </div>
        </router-link>
      </div>
      <div id="select1" class="selectArea">
        <h2 class="levelText two">ウザさLv.2</h2>
        <router-link class="router-link" to="/game/start">
          <div id="mosaic" class="mosaic">
              <img class="selectImage" width="270" src="../../assets/imgs/ad-example.gif" alt="">
              <p class="selectText">クリック領域変動型広告</p>
          </div>
        </router-link>
      </div>
      <div id="select2" class="selectArea">
        <h2 class="levelText three">ウザさLv.3</h2>
        <router-link class="router-link" to="/game/start">
            <div id="mosaic" class="mosaic">
              <img class="selectImage" width="270" src="../../assets/imgs/ad-example.gif" alt="">
              <p class="selectText">透明から浮かびだす広告</p>
            </div>
        </router-link>
      </div>
      <div id="select" class="selectArea">
        <h2 class="levelText four">ラスボス</h2>
        <router-link class="router-link" to="/game/start">
          <div id="mosaic" class="mosaic">
            <img class="selectImage" width="270" src="../../assets/imgs/ad-example.gif" alt="">
            <p class="selectText">？？？？？？？？</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "playbutton",
  components: {
    
  },
  data() {
    return {
      default: false,
      userLevel: 1,
    };
  },
  methods: {
  }
};
</script>
<style scoped>
  .userArea {
    text-align: center;
  }
  span {
    color: #AF0000;
    font-weight: bold;
  }
  .select {
    display: flex;
    background-image: url('../../assets/imgs/glass.svg');
  }
  .asideArea {
    display: inline-block;
    width: 13%;
    height: 100vh;
    background-color: #222;
  }
  .selectWrap {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: center;
    position: relative;
  }
  .selectArea {
    margin: 6% 0% 3% 20%;
  }
  .selectArea {
    width: 350px;
    height: 174px;
    border: 8px solid #111;
    background-color: rgb(241, 241, 241);
  }
  /* .mosaic {
    width: 100%;
    background-color: #fff;
    opacity: 0.27;
  } */
  .selectImage {
    display: block;
    margin: 0 auto;
  }
  /* テキスト スタイル */
    .levelText {
    position: absolute;
  }
  .one {
    top: 90px;
    left: 400px;
  }
  .two {
    top: 90px;
    right: 128px;
  }
  .three {
    top: 400px;
    left: 400px;
  }
  .four {
    top: 400px;
    right: 150px;
  }
    h1 {
    font-size: 35px;
    color: #fff;
  }
  p {
    color: #fff;
    font-size: 30px;
  }
  .selectText {
    color: #111;
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
  }
  /* router-link */
  .router-link {
      text-decoration: none;
      }
</style>
