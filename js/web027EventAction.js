/**
 * Created by Administrator on 2015/1/28.
 */

$(document).ready(function(){
    //------------jQuery常用事件及方法
    $("#button").click(function(){  //单击
    //$("#button").ondblclick(function(){  //双击
    //    $("#button").mouseenter(function(){  //移入
    //        $("#button").mouseleave(function(){  //移开
        $(this).hide();
});
    //-------------------------------------------------------------------------------------------
    //------事件绑定和解除绑定
    //$("#button1").bind("click",clickHandler);
    //$("#button1").bind("click",clickHandler1);
    //$("#button1").unbind("click");//解绑2个事件
    //$("#button1").unbind("click",clickHandler);//解除事件监听clickHandler
    //
    ////----------jQuery1.7之后可使用on,off绑定和解绑事件
    //$("#button1").on("click",clickHandler);
    //$("#button1").off("click",clickHandler);
    //-------------------------------------------------------------------------------------------
    //--------事件目标与冒泡
    $("body").bind("click",bodyHandler2);
   //---------------------------------------------------------------------------------
    //------自定义事件
    $("#button2").click(function(){
        var e=jQuery.Event("MyEvent");
        $("#button2").trigger(e);
    });
    $("#button2").bind("MyEvent",function(event){
        conlog(event);
    });
});

//------------事件绑定与解绑
function clickHandler(e){
    conlog("clickHandler");
}

function clickHandler1(e){
    conlog("clickHandler1");
}

//--------事件目标与冒泡
function bodyHandler2(event){
    //event.stopPropagation();
    event.stopImmediatePropagation();
   conlog(event);
}

/**
 * 日志输出方法
 * @param event
 */
function conlog(event){
    console.log(event);
}