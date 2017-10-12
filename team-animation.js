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
			if($("#Software_Team,#Faculty_Advisors").hasClass("active")){
				if ($(window).width() > 1350) {
					$('.info').css({"height":"1100px"});
				}
				else if($(window).width() > 850){
					$('.info').css({"height":"1000px"});
				}
				else{
					$('.info').css({"height":"4050px"});

					if($(window).width() < 700){
						$('.info').css({"height":"2300px"});
					}
				}
			}
			else{
				if ($(window).width() > 1350) {
					$('.info').css({"height":"750px"});
				}
				else if($(window).width() > 850){
					$('.info').css({"height":"750px"});
				}
				else{

					$('.info').css({"height":"1500px"});
					if($('#Mechanical_Team').hasClass("active")){	
						$('.info').css({"height":"3050px"});
					}
				}
			}
		}
		
		 
}
