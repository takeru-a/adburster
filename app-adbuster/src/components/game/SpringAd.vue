<template>
  <div>
    <h1 id="msg"></h1>
    <span id="area1" class="ad1">
      <img width="100px" src="../../assets/imgs/ad-example2.jpg" alt="">
      <button v-on:click="close('area1')" id="b1" class="closeButton">×</button>
    </span>
    <span id="area2" class="ad ad2">
      <img width="100px" src="../../assets/imgs/ad-example2.jpg" alt="">
      <button v-on:click="close('area2')" id="b2" class="closeButton">×</button>
    </span>
    <span id="area3" class="ad ad3">
      <img width="100px" src="../../assets/imgs/ad-example2.jpg" alt="">
      <button v-on:click="close('area3')" id="b3" class="closeButton moveHover">×</button>
    </span>
    <span id="area4" class="ad ad4">
      <img width="100px" src="../../assets/imgs/ad-example2.jpg" alt="">
      <button @click="close('area4')" id="b4" class="closeButton moveHover">×</button>
    </span>
  </div>
</template>

<script>
export default {
    name: 'spring',
    data() {
      return {
        NUM: 3,
        cnt: 0,
      };
    },
    methods: {
      check: function () {
        if (this.NUM === this.cnt) {
        let msg = document.getElementById('msg');
        msg.textContent = 'クリア!!'
        // thisで参照
        }
      },
      close: function (area) {
        const tag = document.getElementById(area);
        tag.style.display = "none";
      },
    }
}
</script>

<style scoped>
  .ad1 {
    position: relative;
    top: -140px;
    left: 300px;
    transition: all 0.5s;
    transition-timing-function: ease-in;
  }

  .ad2 {
    position: relative;
    top: 100px;
    transition: all 0.5s;
    transition-timing-function: ease-in-out;
  }

  .ad3 {
    position: relative;
    display: inline-block;
    top: 30px;
    left: 100px;
    animation: rotation 3s linear infinite;
  }
  @keyframes rotation {
    from { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
    to { transform: rotate(360deg); }
  }

  .ad4 {
    position: relative;
    top: 350px;
  }

  .closeButton {
    display: inline-block;
    font-size: 100%;
    font-weight: bold;
    height: 20px; width: 20px;
    border: 1px solid #333;
    border-radius: 100%;
    cursor: pointer;
    text-align: center;
    padding: 1px;
  }

  .closeButton:hover {
    background-color: #333;
    color: #fff;
    border-color: #fff;
  }

  .moveHover:hover {
    transform: translate(-20px ,-20px);
  }
</style>