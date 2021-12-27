<template>
  <div class="game">
    <div class="bg-image">
      <img src="../../../assets/imgs/cat.jpg" alt />
    </div>
    <div>
      <div>
        <Sound ref="sound"></Sound>
        <router-link class="router-link" to="/game/select"><button @click="back()">Back</button></router-link>
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
      <EmergeAd ref="em" @countAd="countAd" @touch="touch()" @close="close()"></EmergeAd>
      <ExpandAd
        ref="face"
        @countAd="countAd"
        @touchFace="touchFace()"
        @touch="touch()"
        @close="close()"
        @countFace="countFace()"
      ></ExpandAd>
      <SlideAd @countAd="countAd" ref="sl" @touch="touch()" @close="close()"></SlideAd>
      <MovieAd @countAd="countAd" ref="mo" @touch="touch()" @close="close()"></MovieAd>
      <SpringAd @countAd="countAd" ref="spring" @touch="touch()" @close="close()"></SpringAd>
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
import Sound from "../../../components/Sound";
import EmergeAd from "../../../components/game/EmergeAd";
import ExpandAd from "../../../components/game/ExpandAd";
import MovieAd from "../../../components/game/MovieAd";
import SlideAd from "../../../components/game/SlideAd";
import SpringAd from "../../../components/game/SpringAd"
import Result from "../../../components/Result";

export default {
  name: "gameplay",
  components: {
    Sound,
    EmergeAd,
    ExpandAd,
    MovieAd,
    SlideAd,
    Result,
    SpringAd,
  },
  data() {
    return {
      adSum: 0,
      faceSum: 0,
      adonSum: 0,
      time: 0,
      isPlaying: false,
      resultCountAd: 0
    };
  },
  computed: {
    //小数点の切り捨て
    showtimer() {
      return Math.round(this.time * 100) / 100;
    }
  },
  methods: {
    onSound(num){
      this.$refs.sound.sound_on(num);
    },
    //消した広告の数をカウント
    close() {
      this.adSum++;
      console.log(this.adSum);
      this.check();
      this.onSound(1);
    },
    //顔のダミーのカウント
    countFace() {
      this.adSum++;
      console.log(this.adSum);
      console.log(this.time);
    },
    //広告自体を触った時のカウント
    touch() {
      this.adonSum++;
      this.touchAd();
      this.onSound(0);

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
      this.$refs.spring.emerge();
      this.$refs.em.emerge();
      this.$refs.sl.emerge();
      this.$refs.mo.emerge();
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
      this.onSound(0);
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
    back(){
      this.$refs.face.faceStop();
      this.$refs.mo.stop();
      this.$refs.spring.stop();
    },
    //広告を全部消した時の処理
    check() {
      if(this.resultCountAd=== this.adSum) {
        this.$refs.face.faceStop();
        let msg = document.getElementById("msg");
        msg.style.visibility = "visible";
        clearInterval(this.timer);
        let result = document.getElementById("result1");
        result.style.visibility = "visible";
      }
    },
    //components/game下のコンポーネントにあるcountAdという名前のクラスの個数をカウント
    countAd(value) {
      var componentAd = value;
      this.resultCountAd = componentAd;
      console.log("count"+this.resultCountAd);
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
  visibility: hidden;
}
</style>
