<template>
  <div class="wrapper">
    <!-- クリック  @click="関数名"-->
    <router-link class="router-link" to="/story1">
      <button @click="page" class="Bigbutton">{{story}}</button>
    </router-link>
    <br>
    <button @click="page" class="Bigbutton">{{way}}</button>
    <br>
    <router-link class="router-link" to="/game/emerge">
          <button @click="page" class="Bigbutton">{{play}}</button>
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
    margin: 1.5% auto;
    padding: 0.7em 0.4em;
    width: 350px;
    color: #fff;
    text-align: center;
    font-weight: 800;
    font-size: 2.3em;
    letter-spacing: 0.3em;
    box-shadow: 0px 1px 1px 1px rgba(0 0 0 / .4);
    border: 3px solid #111;
    border-radius: 8px;
    transition: 0.3s;
    background-color: #AF0000;
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
