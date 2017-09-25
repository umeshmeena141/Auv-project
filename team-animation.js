var page=["#Faculty_Advisors","#a"];
function animate2(x,navhover){
		if(x==page[0]){
			return;
		}
		else{
             $(navhover).css({ "color":"black"});
             $(page[1]).css({ "color":"white"});
			
			 $('.desc1').fadeTo(100,'0');
			 $(x).animate({top:'40%',height: '0.3%'},"200");
			 $(page[0]).animate({top:'40%',height: '0.3%'},"200");
             $(page[0]).delay().queue(function (next) { $(this).css({ "backgroundColor":"rgba(30, 100, 174 ,0.8 )"});next();});
			
			 $(x).animate({left:'40%',width: '20%'},200);
			 $(page[0]).animate({left:'40%',width: '20%'},200);
			 $("img,#facultyadvisors,#softteam,#mechteam,#electteam,#bussteam,.thumbnail").delay().fadeOut();
	
			 $(page[0]).delay().queue(function(next){$(this).css({"width":"0","zIndex":"20","backgroundColor":"maroon"});next();});
			 $(page[0]).animate({width:"20%"},300);
			 $(page[0]).delay().queue(function(next){$(this).css({"display":"none"});next();});

			 $('.desc1').delay(1200).fadeTo(100,'1');
			 $(x).queue(function(next){$(x).css({'display':'block','zIndex':'10'}); next();}); 

			 $(x).delay(300).animate({left:'17.65%',width: '69%'},200);
			 $("img,#facultyadvisors,#softteam,#mechteam,#electteam,#bussteam,.thumbnail").delay(600).fadeIn();
			 $(x).animate({top:'15.8%',height: 'auto'},200); 
             $(page[0]).delay(200).queue(function (next) { $(this).css({ "backgroundColor":"rgba(30, 100, 174 ,0.8 )"});next();});
			 page=[x,navhover]; 
		}
		
		 
}
