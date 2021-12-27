<template>
  <div class="toplay-wrap">
    <span class="usage" id='usage'>
    <img src="../../assets/imgs/backimg.svg" alt="toplay" class="toplay">
    <button @click="close()"><img src="../../assets/imgs/tojiru.png" alt="tojitu" class="tojiru"></button>
    </span>
  </div>
</template>
<script>

export default {
  name: "usage",
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>
<style scoped>
.toplay-wrap {
  position: absolute;
  top: 56%;
  right: 65%;
}
.usage{
  position: relative;
  bottom: 0px;
  left: 540px;
}
.toplay{
  width: 600px;
  height: auto;
}
.tojiru{
width: 220px;
height: auto;
position: absolute;
bottom: 50px;
left: 200px;
}
</style>

// 今何をしたいか
// 遊び方を押す→fadeinでToplayを表示+Toplay以外は上に黒い幕を表示
// 閉じるを押すと、Toplayと幕を同時にfadeinで消す