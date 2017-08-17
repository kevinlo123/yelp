/*$(".hamburger").on("click" , function(){
  $("header > nav li").css("display","block");
  $(document).showHamburger();
});*/

$(document).ready(function() {
     $(".hamburger").click(function () {
     $("header > nav li").slideToggle(100)
  });
  });
