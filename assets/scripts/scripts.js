// HEADROOM
/*
var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement);
headroom.init(); 
*/

// HEADER ADAPTIVE COLOR
/*
var stickyOffset = $("header").offset();
var $contentDivs = $(".bg");
$(document).scroll(function() {
  $contentDivs.each(function(k) {
    var _thisOffset = $(this).offset();
    var _actPosition = _thisOffset.top - $(window).scrollTop();
    if (_actPosition < stickyOffset.top && _actPosition + $(this).height() > 0) {
      $("").removeClass("light dark").addClass($(this).hasClass("light") ? "light" : "dark");
      return false;
    }
  });
});
*/

// MOBILE NAVIGATION TOGGLES
/*
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
*/