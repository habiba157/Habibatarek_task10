let mydiv      = document.getElementById('test');
let arrycolor  = ['url(../images/portpic1.jpg) no-repeat center/cover','url(../images/portpic2.jpg) no-repeat center/cover','url(../images/portpic3.jpg) no-repeat center/cover','url(../images/portpic4.jpg) no-repeat center/cover','url(../images/portpic5.jpg) no-repeat center/cover','url(../images/portpic6.jpg) no-repeat center/cover','url(../images/portpic7.jpg) no-repeat center/cover','url(../images/portpic8.jpg) no-repeat center/cover','url(../images/portpic9.jpg) no-repeat center/cover'];
let counter    = 0;

function test(){
    mydiv.style.background = arrycolor[counter] ;
    counter++ 
}
setInterval(test,3000)