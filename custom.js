$('body').on('click', '#ts-emma-toggle', function(e) {
  e.preventDefault();
  $(".ts-pop-up-container-screen--emma").toggleClass("ts-pop-up-container-screen--emma--show");
  $(".ts-page").toggleClass("ts-page--active");
  $(".ts-page-blur").toggleClass("ts-page-blur--active");
  $(".ts-overflow").toggleClass("ts-overflow--active");
});

$('body').on('click', '#ts-grace-toggle', function(e) {
  e.preventDefault();
  $(".ts-pop-up-container-screen--grace").toggleClass("ts-pop-up-container-screen--grace--show");
  $(".ts-page").toggleClass("ts-page--active");
  $(".ts-page-blur").toggleClass("ts-page-blur--active");
  $(".ts-overflow").toggleClass("ts-overflow--active");
});

$('body').on('click', '#ts-jing-toggle', function(e) {
  e.preventDefault();
  $(".ts-pop-up-container-screen--jing").toggleClass("ts-pop-up-container-screen--jing--show");
  $(".ts-page").toggleClass("ts-page--active");
  $(".ts-page-blur").toggleClass("ts-page-blur--active");
  $(".ts-overflow").toggleClass("ts-overflow--active");
});

$('body').on('click', '#ts-matt-toggle', function(e) {
  e.preventDefault();
  $(".ts-pop-up-container-screen--matt").toggleClass("ts-pop-up-container-screen--matt--show");
  $(".ts-page").toggleClass("ts-page--active");
  $(".ts-page-blur").toggleClass("ts-page-blur--active");
  $(".ts-overflow").toggleClass("ts-overflow--active");
});

$('body').on('click', '#ts-video-toggle', function(e) {
  e.preventDefault();
  $(".ts-video-container-screen").toggleClass("ts-video-container-screen--show");
  $(".ts-page").toggleClass("ts-page--active");
  $(".ts-page-blur").toggleClass("ts-page-blur--active");
  $(".ts-overflow").toggleClass("ts-overflow--active");
});

// Email hover

$('body').on('mouseover', '#ts-email-toggle', function(e) {
  e.preventDefault();
  $(".ts-email").addClass("ts-email--hover");
});

$('body').on('mouseleave', '#ts-email-toggle', function(e) {
  e.preventDefault();
  $(".ts-email").removeClass("ts-email--hover");
});

// Slider

$('.ts-slider-container-1').slick({
  infinite: true,
  prevArrow: $(".prev-1"),
  nextArrow: $(".next-1"),
  swipe: true,
});

$('.ts-slider-container-2').slick({
  infinite: true,
  prevArrow: $(".prev-2"),
  nextArrow: $(".next-2"),
  swipe: true,
});

$('.ts-slider-container-3').slick({
  infinite: true,
  prevArrow: $(".prev-3"),
  nextArrow: $(".next-3"),
  swipe: true,
});

$('.ts-slider-container-4').slick({
  infinite: true,
  prevArrow: $(".prev-4"),
  nextArrow: $(".next-4"),
  swipe: true,
});

// Video player

function playVideo() {
        $('#ht-summerboy-video').trigger('play');
    }
    function pauseVideo() {
        $('#ht-summerboy-video').trigger('pause');
    }
