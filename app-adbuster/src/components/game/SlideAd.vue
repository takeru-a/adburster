<template>
  <div>
    <div class="ads" id="ad1">
      <img class="ad-img" @click="touch()" src="../../assets/imgs/ad-example.gif" />
      <button class="close-btn" id="close-btn" type="button" @click="btnClick('ad1')"></button>
    </div>
    <div class="ads" id="ad2">
      <img class="ad-img" @click="touch()" src="../../assets/imgs/ayashii_koukoku_fukugyou.png" />
      <button class="close-btn" id="close-btn" type="button" @click="btnClick('ad2')"></button>
    </div>
    <div class="ads" id="ad3">
      <img class="ad-img" @click="touch()" src="../../assets/imgs/pop_honjitsuno_koukoku.png" />
      <button class="close-btn" id="close-btn" type="button" @click="btnClick('ad3')"></button>
    </div>
    <div class="ads" id="ad4">
      <img class="ad-img" @click="touch()" :src="require(`@/assets/imgs/${random_select()}`)" />
      <button class="close-btn" id="close-btn" type="button" @click="btnClick('ad4')"></button>
    </div>
    <div class="ads" id="ad5">
      <img class="ad-img" @click="touch()" :src="require(`@/assets/imgs/${random_select()}`)" />
      <button class="close-btn" id="close-btn" type="button" @click="btnClick('ad5')"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "slidead",
  data() {
    return {
      urls: [
        "pop_honjitsuno_koukoku.png",
        "ayashii_koukoku_fukugyou.png",
        "ad-example.gif",
        "chirashi_mansion.png"
      ]
    };
  },
  methods: {
    btnClick(area) {
      var ad = document.getElementById(area);
      this.$emit('close');
      ad.remove();
      console.log("closed");
    },
    touch() {
      this.$emit('touch');
    },
    random_select() {
      const len_url = this.urls.length;
      const idx = Math.floor(Math.random() * len_url);
      console.log(idx);
      return this.urls[idx];
    }
  }
};
</script>
<style scoped>
#ad1 {
  position: absolute;
  top: 70%;
  left: 20%;
  width: 70%;
  height: 200px;
  transform: translate(0%, 100%);
  transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.6s;
}
#ad1:hover {
  transform: translate(0, 0);
}

#ad2 {
  position: absolute;
  top: 0%;
  left: 30%;
  width: 30%;
  transform: translate(0%, 30%);
  transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.6s;
}
#ad2:hover {
  transform: translate(50%, 50%);
}

#ad3 {
  position: absolute;
  top: 0%;
  width: 70%;
  transform: translate(20px, 300px);
  transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.6s;
}
#ad3:hover {
  transform: translate(-10%, 30%);
}

#ad4 {
  position: absolute;
  top: 20%;
  width: 30%;
  transform: translate(200%, 70%);
  transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 1s;
}
#ad4:hover {
  transform: translate(40%, -30%);
}

#ad5 {
  position: absolute;
  top: 20%;
  left: 50%;
  width: 30%;
  transform: translate(50%, -10%);
  transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) .3s;
}
#ad5:hover {
  transform: translate(0%, 0%);
}

.ad-img {
  height: 100%;
  width: 100%;
}
.close-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: transparent;
  border: none;
}
.close-btn:hover {
  color: red;
}
.close-btn:after {
  font-family: "fontello";
  content: "\e800";
}
.checkbox {
  height: 50%;
}

@font-face {
  font-family: "fontello";
  src: url("../../assets/fonts/fontello.eot?22568919");
  src: url("../../assets/fonts/fontello.eot?22568919#iefix")
      format("embedded-opentype"),
    url("../../assets/fonts/fontello.woff2?22568919") format("woff2"),
    url("../../assets/fonts/fontello.woff?22568919") format("woff"),
    url("../../assets/fonts/fontello.ttf?22568919") format("truetype"),
    url("../../assets/fonts/fontello.svg?22568919#fontello") format("svg");
  font-weight: normal;
  font-style: normal;
}
</style>
