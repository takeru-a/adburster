<template>
  <div>
    <span class="usage" id='usage'>
    <img src="../../assets/imgs/toplay.png" alt="toplay" class="toplay">
    <button @click="close()"><img src="../../assets/imgs/tojiru.png" alt="tojitu" class="tojiru"></button>
    </span>
  </div>
</template>
<script>

export default {
  name: "usage",
  methods: {
    close() {
      var tag = document.getElementById("usage");
      tag.style.visibility = "hidden";
    }
  }
};
</script>
<style scoped>
.usage{
/*visibility: hidden;*/
 position: relative;
 bottom: 0px;
left: 540px;

}
.toplay{
    width: 800px;
    height: auto;
   
}
.tojiru{
width: 240px;
height: auto;
position: absolute;
bottom: 40px;
left: 280px;
}
</style>
