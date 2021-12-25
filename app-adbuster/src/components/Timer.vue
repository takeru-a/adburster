<template>
  <div>

    
    <button @click="stop()" v-bind:disabled="!isPlaying">stop</button>
    <button @click="reset()" v-bind:disabled="!isPlaying">reset</button>
   

  </div>
</template>
<script>
export default {
   name: 'timer',
   props:['start'],
   data(){
       return{
            isPlaying : false,
            time : 0,
            timer:null,
       }
   },
   computed:{
    
  },
  mounted(){
     this.start()
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
           this.$emit('end', this.time);
       },
       reset(){
           this.time = 0;
           this.isPlaying = false
       },
   },
    
}
</script>

