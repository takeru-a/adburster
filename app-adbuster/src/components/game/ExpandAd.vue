<template>
  <div>
    <br />
    <div>
      <span id="area1" class="main1 countAd">
        <img src="../../assets/imgs/Ad01.png" alt="ad-1" id="pc1" class="ad" @click="touchAd()" />
        <button id="b1" class="close" v-on:click="adclose('area1')">×</button>
      </span>
      <span id="area2" class="main2 countAd">
        <img src="../../assets/imgs/Ad01.png" alt="ad-2" id="pc2" class="ad" @click="touchAd()" />
        <button
          id="b2"
          class="close"
          v-on:click="adclose('area2')"
          v-on:mouseover="expand('b2','pc2')"
        >×</button>
      </span>
      <span id="area3" class="main3 countAd">
        <img src="../../assets/imgs/Ad01.png" alt="ad-3" id="pc3" class="ad" @click="touchAd()" />
        <button id="b3" class="close" v-on:click="adclose('area3')">×</button>
      </span>
    </div>

    <img src="../../assets/imgs/face.png" alt="face" class="face" id="face" @click="touchFace()" />
  </div>
</template>
<script>
export default {
  name: "expand",
  data() {
    return {
      NUM: 3,
      cnt: 0,
      isPlaying: false,
      time: 0,
      timer: null,
      facer: null,
      adcnt: 0,
      facecnt: 0,
      countAdv: 0
    };
  },
  computed: {
    showtimer() {
      return Math.round(this.time * 100) / 100;
    }
  },
  methods: {
    start() {
      for (let i = 1; i <= 3; i++) {
        var area = "area" + i;
        var tag = document.getElementById(area);
        tag.style.visibility = "visible";
        tag.style.display = "";
      }
    },
    touchFace() {
      this.$emit("touchFace");
    },
    touchAd() {
      this.$emit("touch");
    },
    showFace() {
      this.facer = setInterval(() => {
        var tag = document.getElementById("face");
        tag.style.visibility = "visible";
        var x = 100;
        var y = 100;
        var r2 = Math.random();
        var r1 = Math.random();
        tag.style.top = r1 * x + "%";
        tag.style.left = r2 * y + "%";
      }, 1000);
    },
    faceStop() {
      var tag = document.getElementById("face");
      tag.style.visibility = "hidden";
      clearInterval(this.facer);
    },
    adclose(area) {
      let tag = document.getElementById(area);
      tag.style.display = "none";
      this.cnt++;
      console.log(this.cnt);
      this.$emit("close");
    },
    expand(btn, picture) {
      let button = document.getElementById(btn);
      let pc = document.getElementById(picture);
      button.style.transform = "translate(-20px,-20px)";
      pc.style.transform = "scale(1.5,1.5)";
      setTimeout(function() {
        button.style.transform = "translate(0px,0px)";
        pc.style.transform = "scale(1,1)";
      }, 500);
    },
    countAd() {
      var count = document.getElementsByClassName("countAd");
      this.countAdv = count.length;
      this.$emit("countAd", this.countAdv);
    }
  },
  mounted() {
    this.countAd();
  }
};
</script>

<style scoped>
#em {
  display: none;
}
.main1 {
  position: relative;
  top: 30px;
  left: 0px;
  visibility: hidden;
}
.main2 {
  position: relative;
  top: 30px;
  left: 300px;
  visibility: hidden;
}
.main3 {
  position: relative;
  top: 30px;
  left: 600px;
  visibility: hidden;
}
.ad {
  width: 420px;
  height: auto;
}
.ad:hover {
  transform: scale(1.3, 1.3);
}
.close {
  font-size: 100%;
  font-weight: bold;
  border: 1px solid rgb(15, 14, 14);
  color: rgb(5, 5, 5);
  display: flex;
  justify-content: center;
  align-items: right;
  border-radius: 100%;
  width: 1.3em;
  line-height: 1em;
  cursor: pointer;
  transition: 0.2s;
  position: absolute;
  left: 0px;
  top: -220px;
  margin: 0;
}
.close:hover {
  background: #333;
  border-color: #333;
  color: #fff;
  transform: translate(-20px, -20px);
}
.face {
  position: absolute;
  top: 200px;
  left: 750px;
  visibility: hidden;
  width: 250px;
  height: auto;
}
</style>
