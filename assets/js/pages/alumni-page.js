// Faculty Message slide function
function message() {
  $('.message').slideToggle(1000);
  $('.message').css({
    "position": "absolute",
    "top": "0px"
  });
  window.location.href = "#message1";
}
$('#nav a').eq(6).css({
  "color": "white"
});

// Main SlideShow
$(document).ready(function() {
  var previndex = $('.slide').length - 1;
  var currindex = 0;
  var interval = window.setInterval(slideshow, 5000);

  $('.slide').eq(currindex).css({
    "display": "block"
  });
  // sldeshow hide for low width lowscreenhide
  $(window).on('load resize', function() {
    if (window.innerWidth > 1200) {
      window.clearInterval(interval);
      interval = window.setInterval(slideshow, 5000);
      $('.lowscreenhide').css({
        "display": "block"
      });
      // $('.message').css({
      //   "display": "none",
      //   "background": "rgba(22,75,131,0.8)"
      // });

    } else {
      window.clearInterval(interval);
      $('.lowscreenhide').css({
        "display": "none"
      });
      $('.message').css({
        "display": "block",
        "background": "linear-gradient(to right, transparent -40%, black 1000%)",
        "position": "relative"
      });
    }
  })


  function slideshow() {
    previndex = currindex;
    currindex++;
    slideout();
  }

  function prevstate() {
    previndex = currindex;
    currindex--;
    slideout();
  }

  function nextstate() {
    previndex = currindex;
    currindex++;

    slideout();
  }

  function checkend() {
    if (currindex >= $('.slide').length) {
      currindex = 0;
    } else if (currindex < 0) {
      currindex = $('.slide').length - 1;
    } else {
      currindex = currindex;
    }
  }

  function slideout() {
    checkend();
    $('.slide').eq(previndex).animate({
      left: "-30%"
    }, 500);
    $('.slide').eq(currindex).delay(500).fadeIn(500);
    $('.slide').eq(previndex).delay().queue(function(next) {
      $(this).css({
        "display": "none",
        "left": "0%"
      });
      next();
    });
  }

  // Arrow Animation
  window.setInterval(movedown, 1000);

  function movedown() {
    $('.sliding').animate({
      top: '50px'
    }, 500);
    $('.sliding').delay(500).queue(function(next) {
      $(this).css({
        "top": "0px"
      });
      next();
    });
  }

})
