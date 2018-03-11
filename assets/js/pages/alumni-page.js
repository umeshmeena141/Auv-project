$(document).ready(function(){
  $(window).on('load resize',function(){
    if(window.innerWidth<800){
      $('.display').css({"display":"block"})
    }
  })
})
