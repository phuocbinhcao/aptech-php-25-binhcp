// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.readyState);
//             document.getElementById("demo").innerHTML = this.responseText;
//         // } else if (this.readyState == 1) {
//         //     console.log(this.readyState):
//         // } else if (this.readyState == 2) {
//         //     console.log(this.readyState);
//         // } else {
//         //     console.log(this.readyState);
//         // }
//     };
//     xhttp.open(
//         "GET",
//         "dulieu.txt",
//         // "https://namcoi.com/du-an/aptech-php-laravel-crud-user/public/api/users",
//         true
//     );
//     xhttp.send();
// }

// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("demo").innerHTML =
//         this.responseText;
//       }
     
//     };
//     xhttp.open("GET", "https://namcoi.com/du-an/aptech-php-laravel-crud-user/public/api/users", true);
//     xhttp.send();

//   }
  
  $(document).ready(function(){
    $("#button").click(function(){
        $("#Spiner").show();
      });
    })
