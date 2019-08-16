
$(document).ready(function() {

  var target = $('#downarrow');

  $(window).on('scroll', function() {
    var st = $(this).scrollTop();
    target.css({
      'opacity': 1 - st / 50
    });
  });



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

  $("#launchform").click(function() {
    $("#form").addClass("active");
    $("body").addClass("noscroll");
  });

  $("#launchformfooter").click(function() {
    $("#form").addClass("active");
    $("body").addClass("noscroll");
  });

  $("#closebutton").click(function() {
    $("#form").removeClass("active");
    $("body").removeClass("noscroll");
  });






  $window.scroll(function() {
    if (($window.scrollTop() >= 1) && ($window.scrollTop() + $(window).innerHeight() == $(document).height())) {
      $("#navbar").removeClass("initial")
      $("#navbar").addClass("bottom")
    } else if (($window.scrollTop() >= 1) && ($window.scrollTop() + $(window).height() < $(document).height())) {
      $("#navbar").removeClass("bottom")
      $("#navbar").addClass("scrolled")
    } else {
      $("#navbar").removeClass("scrolled")
      $("#navbar").addClass("initial")
    }
  });







});
