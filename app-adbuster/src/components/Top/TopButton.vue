<template>
  <div class="wrapper">
    <!-- クリック  @click="関数名"-->
    <router-link class="router-link" to="/story1">
      <button @click="page" class="Bigbutton one">{{story}}</button>
    </router-link>
    <br>
    <button @click="showtoplay()" class="Bigbutton two">{{way}}</button>
    <br>
    <router-link class="router-link" to="/game/select">
          <button @click="page" class="Bigbutton three">{{play}}</button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "topbutton",
  components: {
    
  },
  data() {
    return {
      story: "ストーリー",
      way: "遊び方",
      play: "プレイする",
    };
  },
  methods: {
    showtoplay(){
      
      this.$emit('btn-click');
    },
    page() {
      
    },
  }
};
</script>

<style scoped>
  /* google fonts "Kosugi" */
  @import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
  .wrapper {
      font-family: 'Potta One', cursive;
  }
  .Bigbutton {
    display: block;
    justify-content: space-between;
    align-items: center;
    top: 100px;
    left: 41%;
    position: absolute;
    padding: 0.4em 0.2em;
    width: 300px;
    color: #fff;
    text-align: center;
    font-weight: 800;
    font-size: 2.1em;
    letter-spacing: 0.3em;
    box-shadow: 0px 1px 1px 1px rgba(0 0 0 / .4);
    border: 3px solid #111;
    border-radius: 8px;
    transition: 0.3s;
    background-color: #AF0000;
  }
  .two {
    top: 220px;
  }
  .three {
    top: 340px;
  }
  .Bigbutton:hover {
    text-decoration: none;
    background-color: #770000;
    box-shadow: 0 0 10px rgba(0 0 0 /0);
  }
  .router-link {
    text-decoration: none;
  }
</style>
