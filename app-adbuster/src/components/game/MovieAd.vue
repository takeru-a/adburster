<template>
  <div>
    <div id="moviead">
      <img src="../../assets/imgs/Ad02.png" alt="ad" @click="adtouch()">
      <button class="close-btn" id="c-btn"  @click="adclose('moviead')"></button>
      <p id="PassageArea" class="cnt">{{ timerCount }}秒後skip</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timerCount: 15,
      result: String
    };
  },
  methods: {
    adclose(id) {
      var ad = document.getElementById(id);
      console.log("click")
      ad.remove();
    },
    adtouch(){
      this.$emit('touch')
      console.log('t')
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
          document.getElementById("c-btn").innerHTML = "閉じる";
        }
      },
      immediate: true
    }
  }
};
</script>
<style scoped>
#moviead {
  width: 300px;
  height: 50px;
  border: 1px solid #000;
  position: relative;
  
}
.cnt{
  background-color: aquamarine;
  position: absolute;
  top: 0px;
  left: 0px;
}
.close-btn{
   background-color: aquamarine;
    position: absolute;
    top: 0px;
    left: 0px;
}
#rs {
  cursor: pointer;
}

</style>
