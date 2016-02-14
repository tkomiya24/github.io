'use strict';

var sun = $('.sun');
function resizeSun() {
  sun.height(sun.width());
  sun.css('margin-top', -sun.width() / 2 + sun.parent().height());
}

$(document).ready(function() {
  resizeSun();
  $(window).resize(function() {
    resizeSun();
  });
});
