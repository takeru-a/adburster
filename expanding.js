const NUM = 3;
let cnt = 0;


let check = () =>{
    if(NUM===cnt){
        let msg = document.getElementById('msg');
        msg.textContent="クリア！！";
    }
}


let adclose1 = () => {
    let tag = document.getElementById('p1');
    tag.style.display='none';
    cnt++;
    console.log(cnt);
    check();
};
let adclose2 = () => {
    let tag = document.getElementById('p2');
    tag.style.display='none';
    cnt++;
    console.log(cnt);
    check();
};
let adclose3 = () => {
    let tag = document.getElementById('p3');
    tag.style.display='none';
    cnt++;
    console.log(cnt);
    check();
};
let button1 = document.getElementById('b1');
let button2 = document.getElementById('b2');
let button3 = document.getElementById('b3');

button1.addEventListener('click',adclose1);
button2.addEventListener('click',adclose2);
button3.addEventListener('click',adclose3);

//button1.onclick = adclose1();
//button2.onclick = adclose2();
//button3.onclick = adclose3();
