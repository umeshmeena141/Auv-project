
var previndex = $('.slide').length-1 ;
var currindex = 0;
$('.slide').eq(currindex).css({"display":"block"});
window.setInterval(movedown,5000);
window.setInterval(slideshow,5000);

function slideshow(){
  previndex=currindex;
  currindex++;
  slideout();
}

function prevstate(){
  previndex=currindex;
  currindex--;
  slideout();
}

function nextstate(){
  previndex=currindex;
  currindex++;

  slideout();
}
function checkend(){
  if(currindex>=$('.slide').length){
    currindex=0;
  }
  else if (currindex<0) {
    currindex=$('.slide').length-1;
  }
  else{
    currindex=currindex;
  }
}

function slideout(){
  checkend();
  $('.slide').eq(previndex).animate({left : "-30%"},500);
  $('.slide').eq(currindex).delay(500).fadeIn(500);
  $('.slide').eq(previndex).delay().queue(function(next){
    $(this).css({"display":"none","left":"0%"}); next();
  });
}

function movedown(){
  $('.sliding').animate({top: '50px'},500);
  $('.sliding').delay(500).queue(function(next){
    $(this).css({"top":"0px"});
  });

}
