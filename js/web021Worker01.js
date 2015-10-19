/**
 * Created by Administrator on 2015/1/27.
 */
var countN=0;

//构造函数
function web021Worker01(){
    postMessage(countN);
    countN++;
    setTimeout(web021Worker01,1000);
}

web021Worker01();