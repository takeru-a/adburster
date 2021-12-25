<template>
  <div class="bg">
    <router-link to="/">home</router-link>
    <br>
    <button @click="start()" v-bind:disabled="isPlaying">start</button>
    <button @click="reset()" v-bind:disabled="!isPlaying">reset</button>
    <h1> {{ showtimer }} 秒経過</h1>
    <span class="point1" id="point">
    <img src="../../assets/imgs/1s.png" alt="1s"/>
    </span>
    
    <h1 id="msg" class="msg"><img src="../../assets/imgs/clear.png" alt="clear"></h1>

    <span id="area1" class="main1">
    <img src="../../assets/imgs/Ad01.png" alt="ad-1" id="pc1" class="ad"  @click="touchAd()"/>
    <button id="b1" class="close" v-on:click="adclose('area1')">×</button>
    </span>
    <span id="area2" class="main2">
    <img src="../../assets/imgs/Ad01.png" alt="ad-2"  id="pc2" class="ad" @click="touchAd()"/>
    <button id="b2" class="close" v-on:click="adclose('area2')" v-on:mouseover="expand('b2','pc2')">×</button>
    </span>
    <span id="area3" class="main3">
    <img src="../../assets/imgs/Ad01.png" alt="ad-3"  id="pc3" class="ad" @click="touchAd()"/>
    <button id="b3" class="close" v-on:click="adclose('area3')">×</button>
    </span>

    

  </div>
</template>
<script>
export default {
   name: 'expand',
   data(){
       return{
            NUM : 3,
            cnt : 0,
            isPlaying : false,
            time : 0,
            timer:null,
            adcnt:0,
       }
   },
   computed:{
       showtimer(){
           return (Math.round(this.time * 100)) / 100
       },
    
  },
   methods: {
       touchAd(){
           this.adcnt++;
           this.addtime()
           var tag = document.getElementById("point");
            tag.style.visibility = 'visible'
           setTimeout(function(){
                tag.style.visibility = 'hidden'
           },500)

       },
       createEl(){

       },
       addtime(){
           this.time++;
       },
       countTime(){
           this.time += 0.01
       },
       reset(){
            this.time = 0;
            this.cnt = 0;
            this.isPlaying = false
            let msg = document.getElementById('msg');
            msg.style.visibility='hidden';
       },
       start(){
            console.log('start!')
            for(let i=1;i<=this.NUM;i++){
                var area ="area"+ i
                var tag = document.getElementById(area);
                tag.style.visibility = 'visible'
                tag.style.display =''
            }
            this.isPlaying = true
            this.timer = setInterval(this.countTime,10)
       },
      check(){
        if(this.NUM===this.cnt){
          let msg = document.getElementById('msg');
          msg.style.visibility = 'visible';
          clearInterval(this.timer);
          
        }
    },
      adclose(area){
          let tag = document.getElementById(area);
          tag.style.display='none';
          this.cnt++;
          console.log(this.cnt);
          this.check();
      },
      expand(btn, picture){
          let button = document.getElementById(btn);
          let pc = document.getElementById(picture);
          button.style.transform='translate(-20px,-20px)';
          pc.style.transform="scale(1.5,1.5)";
          setTimeout(function() {
              button.style.transform='translate(0px,0px)';
              pc.style.transform="scale(1,1)";
          }, 500);
      },
   },
    
}
</script>

<style scoped>
        .bg {
             background-image: url("../../assets/imgs/cat.jpg");
        }
        .main1{
            position:relative;
            top:30px; left:0px;
            visibility: hidden;
            
        }
        
        .main2{
            position:relative;
            top:30px; left:300px;
             visibility: hidden;
        }
        .main3{
            position:relative;
            top:30px; left:600px;
             visibility: hidden;
            
        }
        
        
        .ad{
            width: 420px;
            height: auto;
            
        }
        .ad:hover{
            transform:scale(1.3,1.3);
            /*width: 250px;
            height: auto;*/
            
            
        }
        .close{
            font-size: 100%;
            font-weight: bold;
            border: 1px solid rgb(15, 14, 14);
            color: rgb(5, 5, 5);
            display: flex;
            justify-content: center;
            align-items: right;
            border-radius: 100%;
            width: 1.3em;
            line-height: 1.0em;
            cursor: pointer;
            transition: .2s;
            position:absolute;
            left: 0px;
            top: -220px;
            margin: 0;
        }
    
        .close:hover{
            background: #333;
            border-color: #333;
            color: #FFF;
            transform: translate(-20px,-20px);
        }
        
        .point1{
             visibility: hidden;
             position:absolute;
             top:55px; left:300px;
        }
        .msg{
           position:absolute;
            visibility: hidden;
            top:200px; left:750px;
            transform:scale(1.5,1.5);  
        }
    </style>