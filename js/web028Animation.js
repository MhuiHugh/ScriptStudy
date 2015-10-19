/**
 * Created by Administrator on 2015/1/30.
 */
$(document).ready(function(){
    showHideView();
});

function showHideView(){
    //视图显示，动画持续事件1000毫秒
    $("#button_show").click(function(){
        $("#p_text").show(1000);
        return;
    });
    //视图隐藏
   $("#button_hide").click(function(){
        $("#p_text").hide(1000);
       return;
    });
   //----------------------------------------淡入淡出
    $("#button_show_hide").click(function(){
        conlog("button_show_hide click()");
        //判断视图是否显示状态
        if($("#div_1").is(":visible")){
            $("#div_1").fadeOut(1000);
        }else{
            $("#div_1").fadeIn(1000);
        }
        return;
    });
    //-------单个按钮自动控制状态
    $("#button_show_hide_1").click(function(){
        $("#div_1").fadeToggle(1000);
        return;
    });
    //-----------------------------------------------滑动
    $("#button_sliding_out").on("click",function(){
        conlog("slid out!");
        if($('.div4:hidden')){
            $(".div4").slideDown(500);
        }
        return;
    });
    $("#button_sliding_in").on("click",function(){
        conlog("slid in!");
        //if($(".div_4").is(":visible")) {
        //    conlog("in hello!");
        //    $(".div3").slideDown(1000);
        //}
        //------------
        if($('.div4:visible')){
            conlog("div4 is showing");
            $('.div4').slideUp(1000);
        }
        return;
    });

    $("#button_sliding").on("click",function(){
        $(".div4").slideToggle(1500);
        return;
    });

    $("#button_callback").on("click",function(){
        conlog("button_callback click");
        $(".div4").css("background-color","red").slideUp(1000).slideDown(200);
    });
}
  //-------------------------------------------------回调

/**
 * 日志输出函数
 * @param event
 */
function conlog(event){
    console.log(event);
}