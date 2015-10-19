/**
 * Created by Administrator on 2015/1/27.
 */

var CANVAS_WIDHT=1200,CANVAS_HEIGHT=1200;
var mycanvas,context;
//页面加载完成监听

window.onload=function(){
    console.log("onload");
    creatCanvas();
    //drawRect();
    drawImage();
}

function creatCanvas(){
    console.log("creatCanvas");
    document.body.innerHTML="<canvas id=\"mycanvas\" width=\""+CANVAS_WIDHT+"\"  height=\""+CANVAS_HEIGHT+"\"></canvas>";
    mycanvas=document.getElementById("mycanvas");
    context=mycanvas.getContext("2d");
}

function drawRect(){
    console.log("drawRect");
    context.fillStyle="#FF0000";//矩形样式设置
    //context.rotate(45);//旋转
    //context.transaction(30,60);//平移
    //context.scale(2,0.5);//透明度
    context.fillRect(20,10,200,200);//绘制矩形
}

function drawImage() {
 console.log("drawImage");
    var img=new Image();
    img.onload=function(){
        context.drawImage(img,30,30);
    }
    img.src="img/test.jpg";
}