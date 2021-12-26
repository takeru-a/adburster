<template>
  <div class="game">
    <div class="bg-image">
      <img src="../../../assets/imgs/cat.jpg" alt />
    </div>
    <div>
      <div>
        <button @click="start()" v-bind:disabled="isPlaying">start</button>
        <!-- <button @click="reset()" v-bind:disabled="!isPlaying">reset</button> -->
        <h1>{{ showtimer }} 秒経過</h1>
        <span class="point1" id="point">
          <img src="../../../assets/imgs/1s.png" alt="1s" />
        </span>
        <span class="point2" id="point10">
          <img src="../../../assets/imgs/10s.png" alt="1s" />
        </span>
      </div>
      <EmergeAd></EmergeAd>
      <ExpandAd ref="face" @touchFace="touchFace()" @touchAd="touchAd()" @countAd="countAd()" @countFace="countFace()"></ExpandAd>
      <SlideAd></SlideAd>
      <MovieAd></MovieAd>
      <Result
        class="result"
        id="result1"
        v-bind:ad="adonSum"
        v-bind:face="faceSum"
        v-bind:time="showtimer"
      ></Result>
    </div>
  </div>
</template>
<script>
import EmergeAd from "../../../components/game/EmergeAd";
import ExpandAd from "../../../components/game/ExpandAd";
import MovieAd from "../../../components/game/MovieAd";
import SlideAd from "../../../components/game/SlideAd";
import Result from "../../../components/Result";

export default {
  name: "gameplay",
  components: {
    EmergeAd,
    ExpandAd,
    MovieAd,
    SlideAd,
    Result
  },
  data() {
    return {
      adSum: 0,
      faceSum: 0,
      adonSum: 0,
      time: 0,
      isPlaying: false
    };
  },
  computed: {
    //小数点の切り捨て
    showtimer() {
      return Math.round(this.time * 100) / 100;
    }
  },
  methods: {
    //消した広告の数をカウント
    countAd() {
      this.adSum++;
      console.log(this.adSum);
      this.check();
    },
    //顔のダミーのカウント
    countFace() {
      this.adSum++;
      console.log(this.adSum);
      console.log(this.time);
    },
    //広告自体を触った時のカウント
    countAdon() {
      this.adSum++;
      console.log(this.adSum);
    },
    // reset() {
    //   this.time = 0;
    //   this.cnt = 0;
    //   this.isPlaying = false;
    //   let msg = document.getElementById("msg");
    //   msg.style.visibility = "hidden";
    //   let result = document.getElementById("resultTime");
    //   result.style.visibility = "hidden";
    // },
    //スタートボタン
    start() {
      console.log("start!");
      this.isPlaying = true;
      this.timer = setInterval(this.countTime, 10);
      this.$refs.face.showFace();
      this.$refs.face.start();
    },
    //顔を押した時のポップアップ
    touchFace() {
      var point = document.getElementById("point10");
      point.style.visibility = "visible";
      setTimeout(function() {
        point.style.visibility = "hidden";
      }, 500);
      this.faceSum++;
      this.time += 10;
      this.$emit("countAd");
    },
     //広告自体を押した時のポップアップ
    touchAd() {
      this.adonSum++;
      this.time++;
      var tag = document.getElementById("point");
      tag.style.visibility = "visible";
      setTimeout(function() {
        tag.style.visibility = "hidden";
      }, 500);
    },
    countTime() {
      this.time += 0.01;
    },
    //広告を全部消した時の処理
    check() {
      if (3 === this.adSum) {
        this.$refs.face.faceStop();
        let msg = document.getElementById("msg");
        msg.style.visibility = "visible";
        clearInterval(this.timer);
        let result = document.getElementById("result1");
        result.style.visibility = "visible";
      }
    }
  }
};
</script>
<style>
.game {
  position: relative;
  height: 100%;
  overflow-x: hidden;
}
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -10;
}
/* ペナルティ */
.point1 {
  visibility: hidden;
  width: 250px;
  height: auto;
  position: absolute;
  top: 55px;
  left: 300px;
}
.point2 {
  visibility: hidden;
  width: 250px;
  height: auto;
  position: absolute;
  top: 35px;
  left: 300px;
}
.msg {
  position: absolute;
  visibility: hidden;
  top: 200px;
  left: 750px;
  transform: scale(1.5, 1.5);
}
.result {
  position: absolute;
  top: 350px;
  left: 0;
  visibility: hidden;
}
</style>
