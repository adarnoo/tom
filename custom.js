$('body').on('click', '#ts-project-toggle', function(e) {
  e.preventDefault();
  $(".ts-link--project").toggleClass("ts-link--project--show");
  $(".ts-link--click--project").toggleClass("ts-link--click--show");
});

$('body').on('click', '#ts-contact-toggle', function(e) {
  e.preventDefault();
  $(".ts-link--contact").toggleClass("ts-link--contact--show");
  $(".ts-link--click--contact").toggleClass("ts-link--click--show");
});

$('body').on('click', '#ts-emma-toggle', function(e) {
  e.preventDefault();
  $(".ts-project-container--emma").toggleClass("ts-project-container--show");
  $(".ts-link--emma").toggleClass("ts-link--click--show");
});

$('body').on('click', '#ts-other-toggle', function(e) {
  e.preventDefault();
  $(".ts-project-container--other").toggleClass("ts-project-container--show");
  $(".ts-link--other").toggleClass("ts-link--click--show");
});
