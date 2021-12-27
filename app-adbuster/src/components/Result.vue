<template>
  <div>
    <span class="result2">
      <h1 id="msg" class="msg">
        <img src="../assets/imgs/clear.png" alt="clear" />
      </h1>
      <img src="../assets/imgs/result.png" alt="result" />
      <p class="time">{{ time }}</p>
      <p class="ad">{{ ad }}</p>
      <p class="face">{{ face }}</p>
    </span>
  </div>
</template>
<script>
export default {
  props: ["ad", "face", "time"]
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rammetto+One&display=swap");
.result2 {
  position: relative;
  margin: 150px auto;
  display: block;
  width: 732px;
}
.face {
  font-size: 80px;
  font-family: "Rammetto One", cursive;
  position: absolute;
  top: 100px;
  left: 550px;
}
.ad {
  font-size: 80px;
  font-family: "Rammetto One", cursive;
  position: absolute;
  top: 210px;
  left: 550px;
}
.time {
  font-size: 75px;
  font-family: "Rammetto One", cursive;
  position: absolute;
  bottom: 40px;
  left: 370px;
}
.msg {
  position: absolute;
  visibility: hidden;
  top: -110px;
  left: 230px;
  transform: scale(1.5, 1.5);
}
</style>
