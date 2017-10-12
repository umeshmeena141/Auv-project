var page=["#Faculty_Advisors","#a"];
function animate2(x,navhover){
		if(x==page[0]){
			return;
		}
		else{

            $(x).css({ "opacity": "1"});
			$(page[0]).removeClass("active");
            $(navhover).css({ "color": "black" });
            $(page[1]).css({ "color": "white" });
            $(page[0]).slideUp(1000);
            $(page[0]).css({ "opacity": "0.7", "transition": 'opacity 1s' });
            $(x).slideDown(1000);
            page = [x, navhover];
			$(page[0]).addClass("active");
			if($("#Software_Team").hasClass("active")){
				$('.info').css({"height":"1100px"});
			}
			else{
				$('.info').css({"height":"900px"});
			}
		}
		
		 
}
