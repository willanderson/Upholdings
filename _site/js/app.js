$(document).ready(function() {

  $("#navbar").removeClass("scrolled");

  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var offset = 80;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html, body').stop().animate({
      'scrollTop': $(target).offset().top - offset
    }, 500, 'swing', function() {
      // window.location.hash = target;
    });
  });

  var distance = $('#difference').offset().top - 40,
    $window = $(window);


  let vh = window.innerHeight * 0.01;
  let bottom = $(document).height();
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    let bottom = $(document).height();
  });



  $("#navbar").removeClass("scrolled")
  $("#navbar").addClass("initial")

  $window.scroll(function() {
    if ($window.scrollTop() > 5) {
      $("#navbar").addClass("scrolled")
    } else {
      $("#navbar").removeClass("scrolled")
      $("#navbar").addClass("initial")
    }
  });



});
