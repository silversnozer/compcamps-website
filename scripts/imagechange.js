$(function () {
  $("#frontpageimg").mouseenter(function(){
    $(this).attr("src","image/kermitsupreme.PNG");
  }).mouseleave(function(){
    $(this).attr("src","image/austin.PNG");
  });
});
