$('body').on('click', '#ts-emma-toggle-entry', function(e) {
  e.preventDefault();
  $(".ts-page").addClass("ts-page--active");
  $(".ts-pop-up-container-screen--emma").addClass("ts-pop-up-container-screen--emma--entry");
  $(".ts-pop-up-container-screen--emma").removeClass("ts-pop-up-container-screen--emma--exit");
});

$('body').on('click', '#ts-emma-toggle-exit', function(e) {
  e.preventDefault();
  $(".ts-page").removeClass("ts-page--active");
  $(".ts-pop-up-container-screen--emma").addClass("ts-pop-up-container-screen--emma--exit");
  $(".ts-pop-up-container-screen--emma").removeClass("ts-pop-up-container-screen--emma--entry");
});

// slider

$('.ts-slider-container').slick({
  infinite: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  vertical: true,
  swipe: false,
});
