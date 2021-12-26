<template>
  <div class="springArea" id='sp'>
    <span id="area-11" class="ad-11 countAd">
      <img class="mansion" src="../../assets/imgs/chirashi_mansion.png" alt="p" @click="adtouch()">
      <button v-on:click="adclose('area-11')" id="b121" class="closeButton">
        <span>×</span>
      </button>
    </span>
  </div>
</template>
<script>

export default {
  name: "spring",
  data() {
    return {
      area: null,
      countAdv: 0,
    };
  },
  computed: {

  },
  methods: {
    adclose(id) {
      this.$emit('close');
      var ad = document.getElementById(id);
      ad.remove();
      clearInterval(this.area)
    },
    adtouch() {
      this.$emit('touch');
    },
    randomSlideLeft() {
      this.area = setInterval(() => {
        var tag = document.getElementById("area-11");
        var tag2 = document.getElementById("b121");
        var x = 100;
        var l1 = Math.random();
        tag.style.left = l1 * x + "%";
        tag2.style.left = l1 * x + "%";
      }, 2000);
    },
    emerge() {
            console.log("emerge");
            var sp = document.getElementById("sp");
            sp.style.display = "block";
            this.randomSlideLeft()
        },
    stop(){
      clearInterval(this.area)
    },
       countAd() {
      var count = document.getElementsByClassName("countAd");
      this.countAdv = count.length;
      this.$emit("countAd", this.countAdv);
    },
  },
  mounted() {
    this.countAd();
  }

}
</script>
<style scoped>
#sp {
        display: none;
    }
  .springArea {
    position: relative;
    transition: 1s;
  }
  .mansion {
    width: 380px;
  }
  .closeButton {
    position: absolute;
    top: 0px;
    left: 300px;
    padding: 1px;
    cursor: pointer;
    font-weight: bold;
    font-size: 100%;
    height: 20px;
    width: 20px;
    border: 1px solid #333;
    border-radius: 100%;
  }
  .closeButton:hover {
    background-color: #333;
    color: #fff;
    border-color: #fff;
  }
  .ad-11{
    position: absolute;
    top: -100px;
  }
</style>
