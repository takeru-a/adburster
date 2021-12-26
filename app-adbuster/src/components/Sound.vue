<template>
  <span>
    <button @click="muted()">ミュート</button>
  </span>
</template>
<script>

export default {
  name: "sound",
  data(){
      return{
      audio: [
            new Audio(require('@/assets/sounds/bu.mp3')),
            new Audio(require('@/assets/sounds/break.mp3')),
            ],
      num : 0,
      on: true,
      }
  },
  methods: {
    sound_on(num) {
       this.num = num
       if(this.audio.length>this.num){
        this.audio[this.num].play();
       }else{
           this.num = 0
       }
    },
    muted(){
            this.audio[this.num].muted = this.on;
            this.on = !this.on
    },
  },
};
</script>
<style scoped>

</style>
