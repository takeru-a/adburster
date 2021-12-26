<template>
  <div>
    <div id="ad">
      <div id="PassageArea">{{ timerCount }}</div>
      <div @click="btnClick" id="rs"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timerCount: 5,
      result: String
    };
  },
  methods: {
    btnClick() {
      var ad = document.getElementById("ad");
      ad.remove();
    }
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          document.getElementById("PassageArea").innerHTML = "";
          document.getElementById("rs").innerHTML = "閉じる";
        }
      },
      immediate: true
    }
  }
};
</script>
<style scoped>
#ad {
  width: 300px;
  height: 50px;
  border: 1px solid #000;
}
#rs {
  cursor: pointer;
}
</style>
