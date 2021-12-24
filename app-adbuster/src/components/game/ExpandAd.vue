<template>
  <div>
    <router-link to="/">home</router-link>
    <br>

    <Timer></Timer>
    <h1 id="msg"></h1>

    <span id="area1" class="main">
    <img src="../../assets/imgs/face.png" alt="ad-1" id="pc1" class="ad"/>
    <button id="b1" class="close" v-on:click="adclose('area1')">×</button>
    </span>
    <span id="area2" class="main2">
    <img src="../../assets/imgs/face.png" alt="ad-2"  id="pc2" class="ad"/>
    <button id="b2" class="close" v-on:click="adclose('area2')" v-on:mouseover="expand('b2','pc2')">×</button>
    </span>
    <span id="area3" class="main3">
    <img src="../../assets/imgs/face.png" alt="ad-3"  id="pc2" class="ad"/>
    <button id="b3" class="close" v-on:click="adclose('area3')">×</button>
    </span>
  </div>
</template>
<script>
import Timer from '../Timer'
export default {
   name: 'expand',
   components: {
     Timer
   },
   data(){
       return{
            NUM : 3,
            cnt : 0,
       }
   },
   computed:{
    
  },
   methods: {
       start(){
           console.log('start!')
       },
      check(){
        if(this.NUM===this.cnt){
          let msg = document.getElementById('msg');
          msg.textContent="クリア！！";
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
        div {
            background-color: skyblue;
        }
        .main{
            position:relative;
            top:30px; left:0px
            
        }
        
        .main2{
            position:relative;
            top:30px; left:300px
        }
        .main3{
            position:relative;
            top:30px; left:600px
            
        }
        .ad{
            width: 160px;
            height: auto;
            
        }
        .ad:hover{
            transform:scale(1.5,1.5);
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
        
    </style>