/* Hover And Overlay Function */
$(document).ready(function(){
	$("img").hover(function(){
		$(this).animate({width:"45%",left:"-=4%",paddingTop:"-=1%",zIndex:"10"},300);
		
		
			if($(this).hasClass("act1")){
				if($(this).hasClass("team1")){
					$('.overlay').eq(0).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team2")){
					$('.overlay').eq(4).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team3")){
					$('.overlay').eq(8).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team4")){
					$('.overlay').eq(12).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team5")){
					$('.overlay').eq(16).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				
			}
			else if($(this).hasClass("act2")){
				if($(this).hasClass("team1")){
					$('.overlay').eq(1).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team2")){
					$('.overlay').eq(5).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team3")){
					$('.overlay').eq(9).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team4")){
					$('.overlay').eq(13).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team5")){
					$('.overlay').eq(17).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
			}
			else if($(this).hasClass("act3")){
				if($(this).hasClass("team1")){
					$('.overlay').eq(2).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team2")){
					$('.overlay').eq(6).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team3")){
					$('.overlay').eq(10).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team4")){
					$('.overlay').eq(14).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team5")){
					$('.overlay').eq(18).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
			}
			else if($(this).hasClass("act4")){
				if($(this).hasClass("team1")){
					$('.overlay').eq(3).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team2")){
					$('.overlay').eq(7).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team3")){
					$('.overlay').eq(11).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team4")){
					$('.overlay').eq(15).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
				else if ($(this).hasClass("team5")){
					$('.overlay').eq(19).delay(400).animate({width:"46%",zIndex:"11"},10);
				}
			}		
	},
		function(){
			$(this).animate({width:"30%",left:"+=4%",paddingTop:"+=1%",zIndex:"10"},100);
			$('.overlay').delay(100).animate({width:"0%",zIndex:"11"},10);
		}
	);
});

/* smooth scroll */
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
	  
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top}, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});