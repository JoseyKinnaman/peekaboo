$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing") .slideToggle();
    $("#walrus-hidden").fadeToggle();
  });
  $(".clickable1").click(function() {
    $("#walrus-show") .toggle();
    $("#walrus-hiding").toggle();
  });
});
