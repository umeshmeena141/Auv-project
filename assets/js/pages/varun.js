//position of Nav bar 2 w.r.t screen size
var s1 = document.getElementById("stic");
if (window.innerWidth > 856) { //for displaying icon on desktop and "HOME" on tabs
  s1.style.top = "58px";
} else {
  s1.style.top = "42px";
}
$(window).resize(function() {
  if (window.innerWidth > 856) { //for displaying icon on desktop and "HOME" on tabs
    s1.style.top = "58px";
  } else {
    s1.style.top = "42px";
  }
});
//smooth scroll for Nav bar 2
$(document).ready(function() {
  $("#mechanical").click(function() {
    $("body,html").animate({
      scrollTop: $("#Mechanical").offset().top - 80
    }, 400); //how fast the scrolling animation will be in miliseconds
  });
});
$(document).ready(function() {
  $("#electrical").click(function() {
    $("body,html").animate({
      scrollTop: $("#Electrical").offset().top - 80
    }, 400); //how fast the scrolling animation will be in miliseconds
  });
});
$(document).ready(function() {
  $("#software").click(function() {
    $("body,html").animate({
      scrollTop: $("#Software").offset().top - 80
    }, 400); //how fast the scrolling animation will be in miliseconds
  });
});
