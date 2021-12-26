<template>
    <div class="ad" id="ad">
        <img class="ad-img" src="../../assets/imgs/ad-example.gif">
        <button class="close-btn" id="close-btn" type="button" @click="btnClick()"></button>
        <div class="batsu">×</div>
    </div>
</template>

<script>
export default {
    name: 'slidead',
    methods: {
        btnClick(){
            var ad = document.getElementById("ad");
            ad.remove();
        }
    }
}
</script>

<style scoped> 
    .ad{
        position: relative;
        /* width: 70%;
        margin-left: auto;
        margin-right: auto; */
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
        cursor: pointer;
        transition: .2s;
        position: absolute;
        top: 0;
        left: 0;
    }  
    
    .ad-img{
        position: absolute;
        /* width: 100%;
        height: 200px; */
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
