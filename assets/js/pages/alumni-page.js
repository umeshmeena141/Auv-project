
$('#nav a').eq(6).css({
  "color": "white"
});

$(document).ready(function(){
  $(window).on('load resize',function(){
    if(window.innerWidth<800){
      $('.display').css({"display":"block"})
    }
  })
})
// Main SlideShow
$(document).ready(function() {
  var previndex = $('.slide').length - 1;
  var currindex = 0;
  var interval = window.setInterval(slideshow, 50000);

  $('.slide').eq(currindex).css({
    "display": "block"
  });
  $('#nav a').eq(4).css({
    "color": "white"
  });
  // sldeshow hide for low width lowscreenhide
  $(window).on('load resize', function() {
    if (window.innerWidth > 1200) {
      window.clearInterval(interval);
      interval = window.setInterval(slideshow, 50000);
      $('.lowscreenhide').css({
        "display": "block"
      });
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
  window.setInterval(movedown, 10000);



})
