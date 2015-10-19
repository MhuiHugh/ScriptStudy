/**
 * Created by Administrator on 2015/1/27.
 */

var num=0;
var work=null;
var aid;
window.onload=function(){
    aid=document.getElementById("aid");

    document.getElementById("start").onclick=startWorker();
    document.getElementById("over").onclick=function(){
        if(work){
            //停止并释放资源
            work.terminate();
            work=null;
        }
    }
}

function startWorker(){
    console.log("startWorker()")
    if(work){
        return;
    }
    work=new Worker("js/web021Worker01.js");
    work.onmessage=function(da){
        //改变内容
     aid.innerHTML=da.data;
    }
}