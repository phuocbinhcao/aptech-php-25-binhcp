function loadDoc() {
  var xhttp = new XMLHttpRequest(); //class
  xhttp.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
      console.log(JSON.parse(this.responseText));

      var data = JSON.parse(this.responseText);

      // tạo bảng 
      function Create(nameOfElement) {
        return document.createElement(nameOfElement);
      }
      var table = Create("table");
      var thead = Create("thead");
      var tbody = Create("tbody");
      
      table.appendChild(thead);
      table.appendChild(tbody);

       
      var trow = Create("tr");
      thead.appendChild(trow);
      var thead = ["Id", "Name", "Email", "Action"];
      for (var i = 0; i < thead.length; i++) {
        var th = Create("th");
        var text = document.createTextNode(thead[i]);
        th.appendChild(text);
        trow.appendChild(th);
      };

      
      var trowBody1 = Create("tr");
      tbody.appendChild(trowBody1);

      for (var i = 0; i < data.users.length; i++) {
        var trowBody = Create("tr");
        tbody.appendChild(trowBody);
        var array = [data.users[i].id, data.users[i].name, data.users[i].email, data.users[i].Action];
        
        console.log(trowBody);
        for (var j = 0; j < array.length; j++) {
          var td = Create("td");
          var text = document.createTextNode(array[j]);
          td.appendChild(text);
          trowBody.appendChild(td);
          document.body.appendChild(table);
          
        }
        
      } 
    }
  }

  xhttp.open("GET", "https://namcoi.com/du-an/aptech-php-laravel-crud-user/public/api/users", true);

  xhttp.send();
}