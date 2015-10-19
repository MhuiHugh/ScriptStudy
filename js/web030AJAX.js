/**
 * Created by Administrator on 2015/2/3.
 */
$(document).ready(function(){
    $("#button_send").on("click",function(){
        console.log("click");
        //注意地址不能跨域调用,向服务器发送请求返回数据
        $.get("./php/web030AJAXService.php",{name:$("#namevalue").val()},function(data){
            console.log("改变内容");
            改变文字
            $("#result").text(data);
        });
    });

    //加载一个页面
    //    $("body").load("./web030AJAX.htm",function(a,status,c){
    //        console.log(status);
    //        if(status=="error"){
    //            $("body").text("加载失败！");
    //       }
    //   });

    //---------------加载JavaScript并调用方法
    $.getScript("./js/web030AJAXTest.js").complete(function(){
        console.log("load other js ok!");
        //方法调用
        sayHello();
    });
});