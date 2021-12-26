<template>
  <div class="container">
    <div id="move1" class="box">
      <img class="ad-img" @click="touch()" :src="require(`@/assets/imgs/${random_select()}`)" />
      <button class="close-btn" id="close-btn" type="button" @click="btnClick('move1')"></button>
    </div>
    <div id="move2" class="box">
      <img class="ad-img" @click="touch()" :src="require(`@/assets/imgs/${random_select()}`)" />
      <button class="close-btn" id="close-btn" type="button" @click="btnClick('move2')"></button>
    </div>
    <div id="move3" class="box">
      <img class="ad-img" @click="touch()" :src="require(`@/assets/imgs/${random_select()}`)" />
      <button class="close-btn" id="close-btn" type="button" @click="btnClick('move3')"></button>
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
      ],
      delay: 1000
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
    },
    move(area){
      var move = document.getElementById(area);
      var x = 100;
      var y = 100;
      var r2 = Math.random();
      var r1 = Math.random();
      move.style.top = r1 * x + "%";
      move.style.left = r2 * y + "%";
    }
  }
};
setInterval(function () {
  this.move('move1');
  this.move('move2');
  this.move('move3');
}, this.delay);
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  border: 1px solid #000;
  width: 300px;
  height: 100px;
  position: absolute;
  transition: 1s;
}
</style>