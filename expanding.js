const NUM = 3;
let cnt = 0;


let check = () =>{
    if(NUM===cnt){
        let msg = document.getElementById('msg');
        msg.textContent="クリア！！";
    }
}


let adclose = (p) => {
    let tag = document.getElementById(p);
    tag.style.display='none';
    cnt++;
    console.log(cnt);
    check();
};

let expand = (btn, picture) =>{
    let button = document.getElementById(btn);
    let pc = document.getElementById(picture);
    button.style.transform='translate(-20px,-20px)';
    pc.style.transform="scale(1.5,1.5)";
    setTimeout(function() {
        button.style.transform='translate(0px,0px)';
        pc.style.transform="scale(1,1)";
      }, 500);
};

let button1 = document.getElementById('b1');
let button2 = document.getElementById('b2');
let button3 = document.getElementById('b3');

button1.addEventListener('click',function(){
    adclose('p1');
});
let btn2 = 'b2'
let picture2 = 'pc2';
button2.addEventListener('mouseover',function(){
    expand(btn2,picture2);
});
button2.addEventListener('click',function(){
    adclose('p2');
});
button3.addEventListener('click',function(){
    adclose('p3')
});
