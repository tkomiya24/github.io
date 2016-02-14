'use strict';

var sun = $('.sun');
function resizeSun() {
  sun.height(sun.width());
}

$(document).ready(function() {
  resizeSun();
  $(window).resize(function() {
    resizeSun();
  });
});
