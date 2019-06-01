$("#li1").click(function(){
	$("#pin").css("display","block");
})
$("#ul1").children("li").click(function(){
	$(this).children("span").css("display","block").end().css("color","#00FF00");
	$("#li1").children("span").html($(this).text());
})
$("#li2").click(function(){
	$("#suo").css("display","block");
})
$("#ul2").children("li").click(function(){
	$(this).children("span").css("display","block").end().css("color","#00FF00");
	$("#li2").children("span").html($(this).text());
})
function endd(){
	$("#pin").css("display","none");
	$("#suo").css("display","none");
}
document.getElementById("urse").onkeyup=function(){
    var uname=/^[\u4e00-\u9fa5 a-zA-Z0-9]{3,30}$/;
    if (uname.test(this.value)) {
      document.getElementById("num").onkeyup=function(){
      var tname=/^(13|15|17|18|19)[0-9]{9}$/;
       if (tname.test(this.value)) {
          $("#ti").css("background","#00FF00");
       }
    }
   
  }
}
$("#a1").click(function(){
	$("#tu").css("display","block");
	$("#tu").stop(true,true).animate({"bottom":"0"},1000);

	$("#ul3").children("li").click(function(){
	    $("#a1").children("label").css("display","none");
	    $("#a1").children("span").css("display","none");
	    $("#a1").children("img").css("display","block");
		$(this).children("span").css("display","block");
		var pa=$(this).children("img").attr('src');
		$("#a1").children("img").attr('src',pa);
	})
})
$("#a2").click(function(){
	$("#tu1").css("display","block");
	$("#tu1").stop(true,true).animate({"bottom":"0"},1000);
	
	$("#ul4").children("li").click(function(){
		$("#a2").children("label").css("display","none");
	    $("#a2").children("span").css("display","none");
	    $("#a2").children("img").css("display","block");
		$(this).children("span").css("display","block");
		var pa=$(this).children("img").attr('src');
		$("#a2").children("img").attr('src',pa);
	})
})
$("#a3").click(function(){
	$("#tu2").css("display","block");
	$("#tu2").stop(true,true).animate({"bottom":"0"},1000);
	$("#ul5").children("li").click(function(){
		$("#a3").children("label").css("display","none");
	    $("#a3").children("span").css("display","none");
	    $("#a3").children("img").css("display","block");
		$(this).children("span").css("display","block");
		var pa=$(this).children("img").attr('src');
		$("#a3").children("img").attr('src',pa);
	})
})
function ends(){
//	$("#tu").stop(true,true).animate({"bottom":"-100%"},2000);
	$("#tu").css("display","none");
	$("#tu1").css("display","none");
	$("#tu2").css("display","none");
}
