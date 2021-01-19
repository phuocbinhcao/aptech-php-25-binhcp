$(document).ready(function(){  
     $('#button').click(function(){
        $("#image").attr('src',"./pic_bulbon.gif");
     });
});
$(document).ready(function(){
    $('#button1').click(function(){
      $("#image").attr('src',"./pic_bulboff.gif");
    });
});

$(function() {
  var $images = [];
  $("#d1 > .c1 > a").each(function() {
      $images.push($("img", this).attr("src"));
  });       
  var $length = $images.length;
  var $imgShow = 0;
  $("#d1 > .c1").html( $("#d1 > .c1 > a:first") );   
  $("#d1 > .c1 > a").click(function(event) { 
      $(this).children().attr("src", $images[++$imgShow % $length]);
      event.preventDefault();
  });
});

