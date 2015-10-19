/**
 * Created by Administrator on 2015/1/28.
 */

$(document).ready(function(){
    //元素选择器
    //$("button").click(function(){
        //$("p").text("内容被修改");
        //alert("元素选择器会修改所有该元素内容！");
    //});
   //id选择器
    $("#button1").click(function(){
        $("#p1").text("id选择器内容修改");
    });
   //类选择器
    $("#button2").click(function(){
        $(".p2").text("类选择器内容修改");
    });
});