window.onload = function() {
    search();
    purchase(); //秒杀时间显示
}
var search = function() {

}
/*秒杀*/
var purchase = function() {


	var 
var time=5*60*60;
var timer;
timer=setInterval(function(){

},1000);

}
window.onscroll = function() {
    var top = document.body.scrollTop;
    var height = document.getElementsByClassName("jd_banner")[0].offsetHeight;
    var searchbox = document.getElementsByClassName("jd_header_box")[0];
    if (top > height) {
        searchbox.style.background = "rgba(201,21,35,0.85)";
    } else {
        var op = top / height * 0.85;
        searchbox.style.background = "rgba(201,21,35," + op + ")";
    }
}
