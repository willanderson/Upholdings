$(document).ready(function() {

  var target = $('#downarrow');

  $(window).on('scroll', function() {
    var st = $(this).scrollTop();
    target.css({
      'opacity': 1 - st / 200
    });
  });


  $('a[href^="#"]').click(function() {
    $(this.hash).velocity('scroll');
  });

  var distance = $('#difference').offset().top - 40,
    $window = $(window);

  $window.scroll(function() {
    console.log($window.scrollTop())
    if ($window.scrollTop() >= distance) {
      $("#navbar").removeClass("initial")
      $("#navbar").addClass("scrolled")
    } else {
      $("#navbar").removeClass("scrolled")
      $("#navbar").addClass("initial")
    }
  });


});
