'use strict';

var sun = $('.sun');
function resizeSun() {
  sun.height(sun.width());
  sun.css('margin-top', -sun.width() / 2 + sun.parent().height());
}

function affixNavbar() {
  $('#top-navbar').affix({
    offset: {
      top: $('#page-header').outerHeight(true)
    }
  });
}

$(document).ready(function() {
  resizeSun();
  affixNavbar();
  $(window).resize(function() {
    resizeSun();
  });
});
