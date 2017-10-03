var page=["#Faculty_Advisors","#a"];
function animate2(x,navhover){
		if(x==page[0]){
			return;
		}
		else{
             $(navhover).css({ "color":"black"});
             $(page[1]).css({ "color": "white" });
             $(page[0]).slideUp(1000);
             $(x).delay(1000).queue(function (next) {
                 $(this).fadeTo(1000, '1');
                 next();
             });
             page = [x, navhover];
		}
		
		 
}
