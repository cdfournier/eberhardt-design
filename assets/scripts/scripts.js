// MOBILE NAVIGATION TOGGLES
$('button.menu-toggle svg.menu-toggle-open').click(function() {
  $('nav').addClass('open');
  $('body').addClass('open');
  $('header .logo').addClass('open');
  $('.banner:first-of-type').addClass('open');
  $('button.menu-toggle').attr('aria-expanded',true);
  $('nav ul').attr('aria-hidden',false);
});
$('button.menu-toggle svg.menu-toggle-close').click(function() {
  $('nav').removeClass('open');
  $('body').removeClass('open');
  $('header .logo').removeClass('open');
  $('.banner:first-of-type').removeClass('open');
  $('button.menu-toggle').attr('aria-expanded',false);
  $('nav ul').attr('aria-hidden',true);
});
window.onload = function() {
  if($(window).width()>768) {
    $('nav ul').attr('aria-hidden',false);
  }
};