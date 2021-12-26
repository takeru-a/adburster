<template>
  <div>
    <div class="ads" id="ad1">
      <img class="ad-img" @click="touch()" src="../../assets/imgs/ad-example.gif">
      <button class="close-btn" id="close-btn" type="button" @click="btnClick('ad1')"></button>
      <div class="batsu">×</div>
    </div>
    <div class="ads" id="ad2">
      <img class="ad-img" @click="touch()" src="../../assets/imgs/ayashii_koukoku_fukugyou.png" />
      <button class="close-btn" id="close-btn" type="button" @click="btnClick('ad2')"></button>
      <div class="batsu">×</div>
    </div>
    <div class="ads" id="ad3">
      <img class="ad-img" @click="touch()" src="../../assets/imgs/pop_honjitsuno_koukoku.png" />
      <button class="close-btn" id="close-btn" type="button" @click="btnClick('ad3')"></button>
      <div class="batsu">×</div>
    </div>
    <div class="ads" id="ad4">
      <img class="ad-img" @click="touch()" :src="require(`@/assets/imgs/${random_select()}`)" />
      <button class="close-btn" id="close-btn" type="button" @click="btnClick('ad4')"></button>
      <div class="batsu">×</div>
    </div>
    <div class="ads" id="ad5">
      <img class="ad-img" @click="touch()" :src="require(`@/assets/imgs/${random_select()}`)" />
      <button class="close-btn" id="close-btn" type="button" @click="btnClick('ad5')"></button>
      <div class="batsu">×</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'slidead',
    data() {
    return {
      urls: [
        "pop_honjitsuno_koukoku.png",
        "ayashii_koukoku_fukugyou.png",
        "ad-example.gif",
        "chirashi_mansion.png"
      ]
    };
  },
  methods: {
    btnClick(area){
      var ad = document.getElementById(area);
      ad.remove();
      this.$emit('close');
    },
    touch() {
      this.$emit('touch');
    },
    random_select() {
      const len_url = this.urls.length;
      const idx = Math.floor(Math.random() * len_url);
      console.log(idx);
      return this.urls[idx];
    }
  }
}
</script>

<style scoped> 
    #ad1{
        position: absolute;
        top: 0;
        left: 10%;
        height: 30%;
    }
    #ad2{
        position: absolute;
        top: 40%;
        left: 30%;
    }
    #ad3{
        position: absolute;
        top: 70%;
        left: 60%;
    }
    #ad4{
        position: absolute;
        top: 30%;
        left: -10%;
    }
    #ad5{
        position: absolute;
        top: 20%;
        left: 5%;
    }

    .batsu{
        font-size: 100%;/*ボタンの大きさ*/
        font-weight: bold;
        border: 1px solid #999;
        color: #999;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        width: 1.3em;
        line-height: 1.3em;
        transition: .2s;
        position: absolute;
        top: 0;
        left: 0;
    }  
    
    .ad-img{
        position: relative;
    }
    
    .close-btn{
        position: absolute;
        top: 0px;
        right: 0px;
        background-color: transparent;
        border: none;
    }

    .close-btn:hover{
        color: red;
    }

    .close-btn:after{
        font-family: "fontello";
        content: '\e800';
    }

    .checkbox{
        height: 50%;
    }

    @font-face {
        font-family: 'fontello';
        src: url('../../assets/fonts/fontello.eot?22568919');
        src: url('../../assets/fonts/fontello.eot?22568919#iefix') format('embedded-opentype'),
            url('../../assets/fonts/fontello.woff2?22568919') format('woff2'),
            url('../../assets/fonts/fontello.woff?22568919') format('woff'),
            url('../../assets/fonts/fontello.ttf?22568919') format('truetype'),
            url('../../assets/fonts/fontello.svg?22568919#fontello') format('svg');
        font-weight: normal;
        font-style: normal;
    }
</style>
