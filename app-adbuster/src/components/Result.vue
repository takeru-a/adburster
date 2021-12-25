<template>
<div>
    <span class="result">
        <img src="../assets/imgs/result.png" alt="result"/>
        <p class="time">{{ time }}</p>
        <p class="ad">{{ ad }}</p>
        <p class="face">{{ face }}</p>
        
    </span>
    
</div>
</template>
<script>
export default {
   props:[
       'ad',
       'face',
       'time',
   ]
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rammetto+One&display=swap');
.result{
    position: relative;
}
.face {  
    font-size: 80px;
    font-family: 'Rammetto One', cursive;
    position: absolute;
    top: -490px;
    left: 550px;
}
.ad {  
    font-size: 80px;
    font-family: 'Rammetto One', cursive;
    position: absolute;
    top: -390px;
    left: 550px;
}
.time {  
    font-size: 75px;
    font-family: 'Rammetto One', cursive;
    position: absolute;
    top: -220px;
    left: 370px;
}
</style>
