$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('the-blur');
    $('nav').removeClass('navbar_transparent');
  } else {
    $('nav').addClass('navbar_transparent');
    $('nav').removeClass('the-blur');
  }
})
