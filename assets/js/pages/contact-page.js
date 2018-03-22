$(document).ready(function() {
  // Formspree form information and email address
    var contactform =  document.getElementById('formaction');
    contactform.setAttribute('action', '//formspree.io/' + 'iitauv' + '@' + 'gmail' + '.' + 'com');


  $(window).on('resize load', function() {
    if ($(window).width() < 750) {
      $('#page_heading').css({
        "fontSize": "35px"
      });
      $('.col-md-5').css({
        "margin-left": "0% !important"
      });
      $('h1').css({
        "font-size": "30px"
      });
    }
  });

});
