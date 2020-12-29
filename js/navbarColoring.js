$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('navbar_black');
        $('nav').removeClass('navbar_transparent');
    } else {
        $('nav').addClass('navbar_transparent');
        $('nav').removeClass('navbar_black');
    }
})
