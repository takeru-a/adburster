<template>
  <div class="HomeWrapper">
    
    <router-link to="/game/slide">ゲーム1(少し動く)</router-link>
    <br>
    <router-link to="/game/emerge">ゲーム2(浮かび上がる)</router-link>
    <br>
    <router-link to="/game/expand">ゲーム3(広がる)</router-link>
    <br>
    <router-link to="/game/movie">動画広告</router-link>
    <br>
    <router-link to="/dummy">ダミー</router-link>
    <br>
    <router-link to="/game/move">動く</router-link>
     <TopTitle></TopTitle>

    
    <Sound ref="child"></Sound>
    <button @click="onSound(0)">TestButton</button>

     <TopTitle></TopTitle>
     <TopButton class="button" v-on:btn-click="showUsage()"></TopButton>
     <Toplay class="toplay" id="toplay" v-on:close="close()"></Toplay>
   
    
  </div>
</template>
<script>
//import Header from "../../components/Header"
import TopButton from "../../components/Top/TopButton";
import TopTitle from "../../components/Top/TopTitle"
import Toplay from "../usage/Toplay"
import Sound from "../../components/Sound"

export default {
  name: 'top',
  components: {
    //Header,
    TopButton,
    TopTitle,
    Toplay,
    Sound,
  },
  methods:{
    onSound(num){
      this.$refs.child.sound_on(num);
    },
    showUsage(){
      var tag = document.getElementById("toplay");
      tag.style.visibility = "visible";
    },
    close(){
      var tag = document.getElementById("toplay");
      tag.style.visibility = "hidden";
    },
  },
}

    </script>
<style scoped>
  .HomeWrapper {
    background-image: url("../../assets/imgs/topBackgroundImage.svg");
    background-size: cover;
    min-height: 100vh;
    z-index: -1;
  }
  .button{
    transform: translate(0,250px);
  }
  .toplay{
  visibility: hidden;
  transform: translate(0,-350px);
   
  }
  
</style>