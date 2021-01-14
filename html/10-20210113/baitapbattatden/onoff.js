function tatden(){
    var anh = document.getElementById('anh').src;
    console.log(anh);
    document.getElementById('anh').src='https://www.w3schools.com/js/pic_bulbon.gif';
}
function batden(){
    var anh = document.getElementById('anh').src;
    console.log(anh);
    document.getElementById('anh').src='https://www.w3schools.com/js/pic_bulboff.gif';
}
// function chaneImage(){
//     var bong = document.getElementById('den');
    
//     if(bong.src.match("bulbon")){
//         bong.src = "https://www.w3schools.com/js/pic_bulboff.gif";
//     } else{
//         bong.src = "https://www.w3schools.com/js/pic_bulbon.gif";
//     }
// }

function changeImage(){
    if(document.getElementById('den').src == "https://www.w3schools.com/js/pic_bulboff.gif" ){
        document.getElementById('den').src = "https://www.w3schools.com/js/pic_bulbon.gif";
    } else{
    document.getElementById('den').src = "https://www.w3schools.com/js/pic_bulboff.gif";
    }
}
