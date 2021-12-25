<template>
  <div>
      <img src="../../assets/imgs/cat.jpg" alt="back" class="back">
    <router-link to="/">home</router-link>
    <br>
    <button @click="start()" v-bind:disabled="isPlaying">start</button>
    <button @click="reset()" v-bind:disabled="!isPlaying">reset</button>
    <h1> {{ showtimer }} 秒経過</h1>
    <span class="point1" id="point">
    <img src="../../assets/imgs/1s.png" alt="1s"/>
    </span>
    <span class="point2" id="point10">
    <img src="../../assets/imgs/10s.png" alt="1s"/>
    </span>
    
    <h1 id="msg" class="msg"><img src="../../assets/imgs/clear.png" alt="clear"></h1>
    <img src="../../assets/imgs/face.png" alt="face" class="face" id="face" @click="touchFace()">
    <div>
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
            facer:null,
            adcnt:0,
            facecnt:0,
       }
   },
   computed:{
       showtimer(){
           return (Math.round(this.time * 100)) / 100
       },
    
  },
   methods: {
       touchFace(){
            var point = document.getElementById("point10");
            point.style.visibility = 'visible'
           setTimeout(function(){
                point.style.visibility = 'hidden'
           },500)
           this.facecnt++;
           this.time += 10
       },
       touchAd(){
           this.adcnt++;
           this.addtime()
           var tag = document.getElementById("point");
            tag.style.visibility = 'visible'
           setTimeout(function(){
                tag.style.visibility = 'hidden'
           },500)

       },
       showFace(){
           this.facer = setInterval(() => {
               var tag = document.getElementById("face");
               tag.style.visibility= 'visible'
               var x = 100;
                var y = 100;
                var r2 = Math.random();
                var r1 = Math.random();
                tag.style.top = r1 * x + "%";
                tag.style.left = r2 * y + "%";
           }, 1000);
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
            this.showFace()
       },
      check(){
        if(this.NUM===this.cnt){
          let msg = document.getElementById('msg');
          msg.style.visibility = 'visible';
           var tag = document.getElementById("face");
            tag.style.visibility= 'hidden'
          clearInterval(this.timer);
          clearInterval(this.facer);
          console.log(this.adcnt)
          console.log(this.facecnt)
          
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
              width: 100%;
            height: auto;
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
             width: 250px;
             height: auto;
             position:absolute;
             top:55px; left:300px;
        }
        .point2{
             visibility: hidden;
             width: 250px;
             height: auto;
             position:absolute;
             top:35px; left:300px;
        }
        .msg{
           position:absolute;
            visibility: hidden;
            top:200px; left:750px;
            transform:scale(1.5,1.5);  
        }
        .face{
            position:absolute;
            top:200px; left:750px;
            visibility: hidden;
            width: 250px;
            height: auto;
        }
        .back {
            margin: 0;
            padding: 0;
            position: absolute;
            z-index: -1;
            width: 100%;
  }
    </style>