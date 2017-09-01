$(document).ready(function(){
	$("img").on({mouseenter:function(){
		$(this).animate({width:"400px",left:"-=1%",paddingTop:"-=1%",zIndex:"10"},300);
		$('.overlay').css({"position":"absolute","left":"9%","top":"22.5%","zIndex":"20"});
		
		
	},
	mouseleave:function(){
		$(this).animate({width:"26%",left:"+=1%",paddingTop:"+=1%",zIndex:"1"},100);
		
	}
	});
});