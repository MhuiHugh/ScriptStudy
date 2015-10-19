/**
 * Created by Mhui on 2015/2/4.
 */
//------方式一
//消除$作为jQuery,后续使用jQuery全称或声明变量
var jq=$.noConflict();
jq.myjq = function(){
    alert("Hello myjQuery!");
}
