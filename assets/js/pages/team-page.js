$(document).ready(function() {
  $('#nav a').eq(4).css({
    "color": "white"
  });

  // Different Css for different size of window
  $(window).on('resize load', function() {
    if ($(window).width() > 1350) {
      $('.thumbnail').css({
        "height": "auto"
      });

      $('.faculty').css({
        'font-size': '26px',
        "top": " 4%",
        'margin': "3% 34%"
      });

      $('.team_data_container').css({
        "margin": "0%"
      });

      $('#hide').css({"display":"block"});


      $('.overlay').css({
        "margin": "0%",
        "width": "100%"
      });

      $('i').css({
        "padding": "5px"
      });

      $('.col-sm-3').css({
        "padding-right": "0px"
      });

      $('.rightpad').css({
        "padding": "0"
      });

    }
    else if ($(window).width() > 1080) {

      $('.thumbnail').css({
        "height": "auto",
      });

      $('.faculty').css({
        'font-size': '26px',
        "top": " 4%"
      });

      $('.team_data_container').css({
        "margin": "0%"
      });
      $('#hide').css({"display":"block"});

      $('i').css({
        "padding": "5px"
      });

      $('.col-sm-3').css({
        "padding-right": "0px"
      });


      $('.rightpad').css({
        "padding": "0"
      });

      $('.overlay').css({
        "margin": "0%",
        "width": "100%"
      });
    }
    else if ($(window).width() > 840) {
      $('.thumbnail').css({
        "height": "auto"
      });

      $('.faculty').css({
        'font-size': '26px',
        "top": " 4%"
      });


      $('.team_data_container').css({
        "margin": "0%"
      });

      $('#hide').css({"display":"none"});

      $('i').css({
        "padding": "5px"
      });

      $('.col-sm-3').css({
        "padding-right": "0px"
      });

      $('.rightpad').css({
        "padding": "0"
      });

      $('.overlay').css({
        "margin": "0%",
        "width": "100%"
      });
    }
    else {
      $('.thumbnail').css({
        "height": "auto"
      });

      $('.faculty').css({
        'font-size': '1.4em',
        "top": " 4%"
      });

      $('#hide').css({"display":"none"});

      $('.info_container').css({
        "margin-top": "0px"
      });

      $('.col-sm-3').css({
        "padding-right": "10px"
      });

      $('.team_data_container').css({
        "margin-left": "0%"
      });

      $('.rightpad').css({
        "padding": "10px"
      });
      $('.person_name').css({
        "font-size": "1em"
      });

      $('.card').css({
        "margin":"2% 0% 10% 5%"
      });

      $('.overlay').css({
        "margin": "0%",
        "width": "100%"
      });

      if ($(window).width() < 500) {
        $('i').css({
          "padding": "0px"
        });
        $('.icons').css({
          "padding-top": "4%"
        });
        $('.faculty').css({
          'margin': "3%"
        });
        $('.col-sm-3').css({
          "padding-right": "10px"
        });
        $('#hide').css({"display":"none"});

        $('.card').css({
          "margin":"2% 0% 10% 5%"
        });

        $('.team_data_container').css({
          "margin-right": "2%"
        });

      }

    }
  });
});

// Hovering of Different icons  of Page

$(document).ready(function() {
  $('i').hover(function() {
      $(this).css({
        "color": "black"
      });
      $('.hovericon').css({
        "color": "black"
      });
    },
    // Else function
    function() {
      $('.fa').css({
        "color": "white"
      });
      $('.hovericon').css({
        "color": "black"
      });
    });
});
//Top Sticky Header in Mobile View

$(document).ready(function(){
  $(window).on('load resize',function(){
    if($(window).width() < 720) {
      var headingId=["teamLeaders","softteam","mechteam","electteam","bussteam"];
      var divisionId=["1Team_Leaders","2Software_Team","3Mechanical_Team","4Electrical_Team","5Bussiness_Team"];
      var navbar=[];
      var sticky=[];
      for(i=0;i<5;i++){
        navbar.push(document.getElementById(divisionId[i]));// accessing elements and pushing them in array navbar
        sticky.push(navbar[i].offsetTop) // Pushing the height of the division from start of the document in sticky array
      }
      $(document).scroll(function(){
        myFunction($(this).scrollTop()); // Getting current scroll position
      });
      function myFunction(x) {
        for(j=0;j<5;j++){
          if (x >= sticky[j]) {
            document.getElementById(headingId[j]).style.display="block"; // Showing the header when division crosses current window
          }
          else{
            document.getElementById(headingId[j]).style.display="none"; // Else hide the header
          }
        }
      }

      }
  });
});


//smooth scroll

$(document).ready(function(){
 /* smooth scroll */
 $('a[href*="#"]')
   // Remove links that don't actually link to anything
   .not('[href="#"]')
   .not('[href="#0"]')
   .click(function(event) {
     // On-page links
     if (
       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
       &&
       location.hostname == this.hostname
     ) {
       // Figure out element to scroll to
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
       // Does a scroll target exist?
       if (target.length) {
         // Only prevent default if animation is actually gonna happen
         event.preventDefault();
         $('html, body').animate({
           scrollTop: target.offset().top-60
         }, 500, function() {
           // Callback after animation
           // Must change focus!
           var $target = $(target);
           $target.focus();
           if ($target.is(":focus")) { // Checking if the target was focused
             return false;
           } else {
             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
             $target.focus(); // Set focus again
           };
         });
       }
     }
   });
});
