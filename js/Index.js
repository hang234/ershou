$(document).ready(function(){
    var i = 0 ;
    var timer;
   $('.item').eq(0).show().siblings('.item').hide();
   showTime();
 function showTime(){
   timer = setInterval(function(){
     Show();
     i++;
     if(i==5){
       i=0;
     }
   },3000);
 }
 function Show(){
   $('.item').eq(i).fadeIn(300).siblings('.item').fadeOut(300);
   $('.tab').eq(i).addClass('active').siblings('.tab').removeClass('active');
 }
   
 });