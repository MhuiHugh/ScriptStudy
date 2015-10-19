/**
 * Created by Mhui on 2015/2/4.
 */

$(document).ready(function(){
    $(window).on("load",function(){
        imgLocation();
        //鼠标滚动自动加载
        var dataImg={"data":[{"src":"a0.jpg"},{"src":"a1.jpg"},{"src":"a2.jpg"},{"src":"a3.jpg"},{"src":"a4.jpg"},{"src":"a5.jpg"}]};
        window.onscroll=function(){
            console.log(scrollSide());
          if(scrollSide()){
              $.each(dataImg.data,function(index,value){
                  var box=$("<div>").addClass("box").appendTo($("#container"));
                  var content=$("<div>").addClass("content").appendTo(box);
                  $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
              });
             imgLocation();
          }
        }
    });
});

/**
 * 鼠标滚动监听,判断是否需要加载更多图片
 */
function scrollSide(){
    var box=$(".box");
    //var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last.height()/2);
    var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight=$(document).height();
    var scrollHeight=$(window).scrollTop();
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}


/**
 * 图片位置计算
 */
function imgLocation(){
    var box=$(".box");
    var boxWidth=box.eq(0).width();
    var num=Math.floor($(window).width()/boxWidth);
    var boxArr=[];
    box.each(function(index,value){
        //console.log(index+"--"+value);
        var boxHeight=box.eq(index).height();
        if(index<num){
            boxArr[index]=boxHeight;
            //console.log(boxHeight);
        }else{//获取最小盒子高度
            //最小高度
           var minboxHeight=Math.min.apply(null,boxArr);
            //最小高度位置
            var minboxIndex= $.inArray(minboxHeight,boxArr);
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex]+=box.eq(index).height();
        }

    });
}