$(document).ready(function() {

  var target = $('#downarrow');

  const isValidEmail = emailField.checkValidity();

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

  var $form = $('form#email-form'),
  url = 'https://script.google.com/macros/s/AKfycbxJVkVHCpVh2YeUzc-eTFJb0-025BM56w6As5QiTk1U5EPN3CU/exec'

  $('#submit-form').on('click', function(e) {
    e.preventDefault();
    $("#submit-form").addClass("dn");
    $("#load").removeClass("dn");
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeObject(),
      success: function(data) {
         $("#email-form").hide();
         $("#success").show();
      }
    });
  })






});
