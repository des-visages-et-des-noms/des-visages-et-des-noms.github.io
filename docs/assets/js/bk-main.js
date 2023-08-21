
/// window.onload=function(){}

// ------------------------------------------------
// ---------------------------------- STICKY HEADER
// ------------------------------------------------

var lastScroll = 0;
var isScrolled = false;

window.addEventListener("scroll", function () {

  var topHeader = document.querySelector(".site-header");

  var currentScroll =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  var scrollDirection = currentScroll < lastScroll;
  var shouldToggle = isScrolled && scrollDirection;
  isScrolled = currentScroll > 318;
  topHeader.classList.toggle("sticky", shouldToggle);
  lastScroll = currentScroll;

});

// ------------------------------------------------
// ----------------------------- LANCER LES SCRIPTS
// ------------------------------------------------

// document.addEventListener("DOMContentLoaded", function(event) { });

window.onload = function () {
  // bk_data_time();
};