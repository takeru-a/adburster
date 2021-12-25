<template>
    <div>
      <div class="wrapper">
        <img class="newImg" src="../../assets/imgs/new.svg" alt="">
        <h1 class="topTitle">アドバスター</h1>
        <img src="../../assets/imgs/subTitle.svg" alt="">
      </div>
    </div>
</template>
<script>
export default {
  name: "toptitle",
  components: {
    
  },
  data() {
    return {

    };
  },
  methods: {
  }
};
</script>
<style scoped>
  .wrapper {
    margin: 0 auto;
    width: 730px;
    height: 200px;
    margin-bottom: 100px;
  }
  .topTitle {
    position: relative;
    margin: 0;
    letter-spacing: 0.1em;
    font-size: 110px;
    font-weight: 700;
    color: #DA0000;
        text-shadow:
        7px  0 0 #000,
        7px 7px 0 #000,
        0 7px 0 #000,
        -7px 7px 0 #000,
        -7px 0 0 #000,
        -7px -7px 0 #000,
        0 -7px 0 #000,
        7px -7px 0 #000;
  }
  .newImg {
    position: absolute;
    top: 10%;
    right: 40%;
  }
</style>
