var page=["#Faculty_Advisors","#a"];
function animate2(x,navhover){
		if(x==page[0]){
			return;
		}
		else{
             $(navhover).css({ "color":"black"});
             $(page[1]).css({ "color": "white" });
             $(page[0]).css({ "transform": "rotateY(180deg)", "transition": "all 0.6s linear" });
             $(page[0]).fadeTo(400, '0.5');
             $(page[0]).delay(100).queue(function (next) {
                 $(this).css({ "transform": "rotateY(0deg)", "transition": "all 0.1s linear" ,"display":"none"});
                 $(x).css({ "display": "block" });
                 $(x).fadeTo(10, '1');
                 next();
             }); 
             page = [x, navhover];
		}
		
		 
}
