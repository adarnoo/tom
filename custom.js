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

$('body').on('click', '#ts-geoffery-toggle', function(e) {
  e.preventDefault();
  $(".ts-project-container--geoffery").toggleClass("ts-project-container--show");
  $(".ts-link--geoffery").toggleClass("ts-link--click--show");
});

$('body').on('click', '#ts-grace-toggle', function(e) {
  e.preventDefault();
  $(".ts-project-container--grace").toggleClass("ts-project-container--show");
  $(".ts-link--grace").toggleClass("ts-link--click--show");
});

$('body').on('click', '#ts-jing-toggle', function(e) {
  e.preventDefault();
  $(".ts-project-container--jing").toggleClass("ts-project-container--show");
  $(".ts-link--jing").toggleClass("ts-link--click--show");
});

$('body').on('click', '#ts-matt-toggle', function(e) {
  e.preventDefault();
  $(".ts-project-container--matt").toggleClass("ts-project-container--show");
  $(".ts-link--matt").toggleClass("ts-link--click--show");
});
