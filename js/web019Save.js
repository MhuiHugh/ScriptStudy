/**
 * Created by Administrator on 2015/1/27.
 */

var ta,button; //文本框，按钮
var txt,button1;
var num=0;

window.onload=function(){
    //saveData();
    sessionStroageTest();
}

function saveData(){
    console.log("saveData()");
   ta=document.getElementById("ta");
    //重新放置到输入框
    if(localStorage.text){
        ta.value=localStorage.text;
    }
    button=document.getElementById("btn");
    button.onclick=function(){
      //存储数据
        localStorage.text = ta.value;
    }
}

function sessionStroageTest(){
    console.log("seessionStroage()");
    txt=document.getElementById("txt");
    button1=document.getElementById("btn1");
    if(sessionStorage.num){
        num=sessionStorage.num;
    }else{
        num=0;
    }
    button1.onclick=function(){
        num++;
        //数据存储
        sessionStorage.num= num;
        txt.innerHTML=num;
    }
}