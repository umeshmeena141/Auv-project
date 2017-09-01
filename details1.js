$(document).ready(function(){
	$("img").on({mouseenter:function(){
		$(this).animate({width:"400px",left:"-=1%",paddingTop:"-=1%",zIndex:"10"},300);
		$('.overlay').css({"position":"absolute","left":"$(img).position().left","top":"$(img).position().top","zIndex":"20"});
		
	},
	mouseleave:function(){
		$(this).animate({width:"280px",left:"+=1%",paddingTop:"+=1%",zIndex:"1"},100);
		
	}
	});
});