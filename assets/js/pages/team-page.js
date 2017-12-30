$(document).ready(function() {
  $('#nav a').eq(6).css({
    "color": "white"
  });
  $(window).on('resize load ', function() {
    if ($(window).width() > 1350) {
      $('.thumbnail').css({
        "height": "auto",

        "margin": "0% 0% 5%"
      });
      $('.faculty').css({
        'font-size': '26px',
        "top": " 4%",
        'margin': "3% 34%"
      });
      $('.containers').css({
        "margin": "0%"
      });
      // $('.container1').css({ "top": "8.3%" });
      $('.overlay').css({
        "margin": "0%",
        "width": "100%"
      });
      $('#teamnav').css({
        "padding": "0% 0% 0% 0%",
        "top": "59px"
      });
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

        "margin": "0% 0% 3%"
      });
      $('.faculty').css({
        'font-size': '26px',
        "top": " 4%"
      });
      $('#teamnav').css({
        "padding": "0% 0% 0% 0%",
        "top": "59px"
      });
      $('.containers').css({
        "margin": "0%"
      });
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
      $('.info_container').css({
        "margin-top": "110px"
      });
      $('.overlay').css({
        "margin": "0%",
        "width": "100%"
      });
    } else if ($(window).width() > 840) {
      $('.thumbnail').css({
        "height": "auto",

        "margin": "0% 0% 3%"
      });
      $('.faculty').css({
        'font-size': '26px',
        "top": " 4%"
      });
      $('#teamnav').css({
        "padding": "0% 0% 0% 0%",
        "top": "59px"
      });
      $('#cTeam1').css({
        "position": "static"
      });
      $('.containers').css({
        "margin": "0%"
      });
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
      $('.info_container').css({
        "margin-top": "110px"
      });
      $('.overlay').css({
        "margin": "0%",
        "width": "100%"
      });

    } else {
      $('.thumbnail').css({
        "height": "auto",

        "margin": "3% 0% 2% 0%"
      });
      $('.faculty').css({
        'font-size': '1.4em',
        "top": " 4%"
      });
      $('#cTeam1').css({
        "position": "static"
      });
      $('#teamnav').css({
        "padding": "0% 0% 0% 0%",
        "top": "59px"
      });
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
        // $('.info').css({ "height": "2700px" });
        $('#teamnav').css({
          "padding": "0%"
        });
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
      $(page[1]).css({
        "color": "black"
      });
    });
});

$(".card").on({mouseenter:function(){
  $(this).find('img').css({"-webkit-transform":"rotateX(100deg)", "-webkit-transform-origin" :"50% 0%","transition-timing-function":"linear","transition-duration":"1s"});
  $(this).children(".textw").fadeIn();
  $(this).children(".card2").css({"-webkit-transform":"rotateX(90deg)", "-webkit-transform-origin" :"50% 0%","transition-timing-function":"linear","transition-duration":"1s"});

},
mouseleave:function(){
    $(this).find('img').css({"-webkit-transform":"rotateX(0deg)", "-webkit-transform-origin" :"50% 0%","transition-timing-function":"linear","transition-duration":"0.5s"});
    $(this).children(".card2").css({"-webkit-transform":"rotateX(0deg)", "-webkit-transform-origin" :"50% 0%","transition-timing-function":"linear","transition-duration":"1s"});

  }});
