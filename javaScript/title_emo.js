var element_emo_1 =document.getElementById("intro_emo_1")
var element_emo_2 =document.getElementById("intro_emo_2");
var element_emo_3 =document.getElementById("intro_emo_3");
var element_emo_4 =document.getElementById("intro_emo_4");
var element_emo_5 =document.getElementById("intro_emo_5");
var element_emo_6 =document.getElementById("intro_emo_6");
var elemento_about=document.getElementById("about");
var moveFlag = 0;

elemento_about.addEventListener("click", move);

function move(){

    if(moveFlag == 0){
        elemento_about.style.transform ="translateX(0)";
        moveFlag = 1;
    }
    else if(moveFlag == 1){
        elemento_about.style.transform="translateX(57vh)";
        moveFlag = 0;
    }
}





function state1(){
    element_emo_4.style.left="calc("+element_emo_3.clientWidth+"px + 2%)";
    element_emo_4.style.transform = "translateX(0%)";

    element_emo_5.style.left = "100%";
    element_emo_5.style.transform = "translateX(-100%)";

    element_emo_6.style.left="0";
    element_emo_6.style.transform = "translateX(0%)";

    setTimeout(state2, 2000);
}

function state2(){
    element_emo_2.style.left="calc("+element_emo_1.clientWidth+"px + 2%)";
    element_emo_2.style.transform = "translateX(0%)";

    element_emo_4.style.left = "100%";
    element_emo_4.style.transform = "translateX(-100%)";

    element_emo_5.style.left = "100%";
    element_emo_5.style.transform = "translateX(-100%)";

    setTimeout(state3, 2000);
}

function state3(){
    element_emo_2.style.left = "100%";
    element_emo_2.style.transform = "translateX(-100%)";

    element_emo_5.style.left="0";
    element_emo_5.style.transform = "translateX(0%)";

    element_emo_6.style.left = "100%";
    element_emo_6.style.transform = "translateX(-100%)";

    setTimeout(state1, 2000);
}
state1();