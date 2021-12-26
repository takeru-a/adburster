<template>
  <div class="springArea">
    <span id="area1" class="ad1">
      <img class="mansion" src="../../assets/imgs/chirashi_mansion.png" alt="">
      <button v-on:click="adclose('area1')" id="b1" class="closeButton">
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
    };
  },
  computed: {

  },
  methods: {
    adClose(id) {
      this.$emit('close');
      var ad = document.getElementById(id);
      ad.remove();
    },
    adtouch() {
      this.$emit('touch');
    },
    randomSlideLeft() {
      this.area = setInterval(() => {
        var tag = document.getElementById("area1");
        var x = 100;
        var l1 = Math.random();
        tag.style.left = l1 * x + "%";
      }, 1000);
    },
  }
}
</script>
<style scoped>
  .springArea {
    position: relative;
    transition: 1s;
  }
  .mansion {
    width: 380px;
  }
  .closeButton {
    position: fixed;
    top: 10px;
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
</style>
