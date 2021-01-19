$(document).ready(function(){
    $('p').click(function(){
        $(this).hide();
    });

    $('#button').click(function(){
        $("ul").append("<li>Appended item</li>");
    });

    $("#button2").click(function(){
        $("p").append("Appended item");
    });

    $('#hide').click(function(){
        $('p').hide(1000);
    });
    $('#show').click(function(){
        $('p').show(1000);
    });

    $('#cao1').click(function(){
        $('#cao2').slideToggle();
    });

});


