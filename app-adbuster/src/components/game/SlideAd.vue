<template>
    <div class="ad" id="ad">
        <img class="ad-img" src="../../assets/imgs/ad-example.gif">
        <button class="close-btn" id="close-btn" type="button" @click="btnClick()"></button>
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
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        transform: translate(0px, 100px);
        transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) .6s;
    }

    .ad:hover{
        transform: translate(0, 0);
    }

    .ad-img{
        position: absolute;
        width: 100%;
        height: 200px;
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
