<template>
  <div>

    <button @click="start()" v-bind:disabled="isPlaying">start</button>
    <button @click="stop()" v-bind:disabled="!isPlaying">stop</button>
    <button @click="reset()" v-bind:disabled="!isPlaying">reset</button>
    <h1> {{ time }} 秒経過</h1>

  </div>
</template>
<script>
export default {
   name: 'timer',
   data(){
       return{
            isPlaying : false,
            time : 0,
            timer:"",
       }
   },
   computed:{
    
  },
   methods: {
       start(){
           console.log('start!')
           this.isPlaying = true
           this.timer = setInterval(this.addtime,1000)
       },
       addtime(){
           this.time++;
       },
       stop(){
           clearInterval(this.timer);
       },
       reset(){
           this.time = 0;
           this.isPlaying = false
       },
   },
    
}
</script>

