$('body').on('click', '#ts-small-toggle', function(e) {
  e.preventDefault();
  $(".ts-feed-inner-container").removeClass("ts-feed-inner-container--medium");
  $(".ts-feed-inner-container").removeClass("ts-feed-inner-container--large");
  $(".ts-grid-switch--large").removeClass("ts-grid-switch--active-large");
  $(".ts-grid-switch--medium").removeClass("ts-grid-switch--active-medium");
  $(".ts-grid-switch--small").addClass("ts-grid-switch--active-small");
});

$('body').on('click', '#ts-medium-toggle', function(e) {
  e.preventDefault();
  $(".ts-feed-inner-container").addClass("ts-feed-inner-container--medium");
  $(".ts-feed-inner-container").removeClass("ts-feed-inner-container--large");
  $(".ts-grid-switch--large").removeClass("ts-grid-switch--active-large");
  $(".ts-grid-switch--medium").addClass("ts-grid-switch--active-medium");
  $(".ts-grid-switch--small").removeClass("ts-grid-switch--active-small");
});

$('body').on('click', '#ts-large-toggle', function(e) {
  e.preventDefault();
  $(".ts-feed-inner-container").addClass("ts-feed-inner-container--large");
  $(".ts-feed-inner-container").removeClass("ts-feed-inner-container--medium");
  $(".ts-grid-switch--large").addClass("ts-grid-switch--active-large");
  $(".ts-grid-switch--medium").removeClass("ts-grid-switch--active-medium");
  $(".ts-grid-switch--small").removeClass("ts-grid-switch--active-small");
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

// Video player

function playVideo() {
        $('#ht-summerboy-video').trigger('play');
    }
    function pauseVideo() {
        $('#ht-summerboy-video').trigger('pause');
    }
