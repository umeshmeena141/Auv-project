$(document).ready(function() {
  $('#nav a').eq(4).css({
    "color": "white"
  });
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
      $('.containers').css({
        "margin": "0%"
      });
      $('.verticalnav').css({"display":"block"});
      // $('.container1').css({ "top": "8.3%" });
      $('.overlay').css({
        "margin": "0%",
        "width": "100%"
      });
      // $('#teamnav').css({
      //   "padding": "0% 0% 0% 0%",
      //   "top": "59px"
      // });
      $('#cTeam1').css({
        "position": "sticky",
        "top": "59px"
      });
      $('i').css({
        "padding": "5px"
      });
      $('.col-sm-3').css({
        "padding-right": "0px"
      });
      // $(".info").css({ "height": "1100px" });
      $('.rightpad').css({
        "padding": "0"
      });
    } else if ($(window).width() > 1080) {
      $('#cTeam1').css({
        "position": "sticky",
        "top": "59px"
      });
      $('.thumbnail').css({
        "height": "auto",
      });
      $('.faculty').css({
        'font-size': '26px',
        "top": " 4%"
      });
      // $('#teamnav').css({
      //   "padding": "0% 0% 0% 0%",
      //   "top": "59px"
      // });
      $('.containers').css({
        "margin": "0%"
      });
      $('.verticalnav').css({"display":"block"});
      //$('.container1').css({ "top": "8.3%" });
      $('i').css({
        "padding": "5px"
      });
      $('.col-sm-3').css({
        "padding-right": "0px"
      });

      // $(".info").css({ "height": "1200px" });
      $('.rightpad').css({
        "padding": "0"
      });

      $('.overlay').css({
        "margin": "0%",
        "width": "100%"
      });
    } else if ($(window).width() > 840) {
      $('.thumbnail').css({
        "height": "auto"
      });
      $('.faculty').css({
        'font-size': '26px',
        "top": " 4%"
      });
      // $('#teamnav').css({
      //   "padding": "0% 0% 0% 0%",
      //   "top": "59px"
      // });
      $('#cTeam1').css({
        "position": "static"
      });
      $('.containers').css({
        "margin": "0%"
      });
      //$('.container1').css({ "top": "8.3%" });
      $('.verticalnav').css({"display":"none"});
      $('i').css({
        "padding": "5px"
      });
      $('.col-sm-3').css({
        "padding-right": "0px"
      });

      // $(".info").css({ "height": "1200px" });
      $('.rightpad').css({
        "padding": "0"
      });
      // $('.info_container').css({
      //   "margin-top": "110px"
      // });

      $('.overlay').css({
        "margin": "0%",
        "width": "100%"
      });


    } else {
      $('.thumbnail').css({
        "height": "auto"
      });
      $('.faculty').css({
        'font-size': '1.4em',
        "top": " 4%"
      });
      $('#cTeam1').css({
        "position": "static"
      });
      $('.verticalnav').css({"display":"none"});
      // $('#teamnav').css({
      //   "padding": "0% 0% 0% 0%",
      //   "top": "59px"
      // });
      $('.info_container').css({
        "margin-top": "0px"
      });
      // $('.info').css({ "height": "4050px" });
      $('.col-sm-3').css({
        "padding-right": "10px"
      });
      $('.containers').css({
        "margin-left": "0%"
      });
      //$('.container1').css({ "top": "4.3%","left":"3%" });
      $('.rightpad').css({
        "padding": "10px"
      });
      $('.desc1').css({
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
        $('.verticalnav').css({"display":"none"});
        // $('.info').css({ "height": "2700px" });
        // $('#teamnav').css({
        //   "padding": "0%"
        // });
        $('.card').css({
          "margin":"2% 0% 10% 5%"
        });

        $('.containers').css({
          "margin-right": "2%"
        });

      }

    }
  });
});

$(document).ready(function() {
  $('i').hover(function() {
      $(this).css({
        "color": "black"
      });
      $('.hovericon').css({
        "color": "black"
      });
    },
    function() {
      $('.fa').css({
        "color": "white"
      });
      $('.hovericon').css({
        "color": "black"
      });
    });
});
// Animations

$(document).ready(function(){
  $(window).on('load resize',function(){
    if($(window).width() < 720) {
      var headingId=["teamLeaders","softteam","mechteam","electteam","bussteam"];
      var divisionId=["1Team_Leaders","2Software_Team","3Mechanical_Team","4Electrical_Team","5Bussiness_Team"];
      var navbar=[];
      var sticky=[];
      for(i=0;i<5;i++){
        navbar.push(document.getElementById(divisionId[i]));
        sticky.push(navbar[i].offsetTop)
      }
      $(document).scroll(function(){
        myFunction($(this).scrollTop());
      });
      function myFunction(x) {
        for(j=0;j<5;j++){
          if (x >= sticky[j]) {
            document.getElementById(headingId[j]).style.display="block";
          }
          else{
            document.getElementById(headingId[j]).style.display="none";
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
