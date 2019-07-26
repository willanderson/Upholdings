$(document).ready(function() {

  $('a[href^="#"]').click(function() {
    $(this.hash).velocity('scroll');
  });

  var distance = $('#difference').offset().top - 40, $window = $(window);

  $window.scroll(function() {
    if ($window.scrollTop() >= distance) {
        $( "#navbar" ).removeClass( "initial" )
        $( "#navbar" ).addClass( "scrolled" )
    }
    else {
        $( "#navbar" ).removeClass( "scrolled" )
        $( "#navbar" ).addClass( "initial" )
    }
  });


});
