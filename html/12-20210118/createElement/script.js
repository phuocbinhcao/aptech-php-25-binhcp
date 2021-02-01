function inDuLieu(){
    var sanPham = [
        ['iPhone', 10, 'my', 'nhap khau'],
        ['Galaxy', 12, 'han quoc', 'trong nuoc'],
        ['xiaomi', 9, 'trung quoc', 'nhap khau'],
        ['huawei', 15, 'trung quoc', 'buon lau'],
      ];


    var tableElement = document.getElementById('tableBody');
    var text ='';
  for (var i =0; i < sanPham.length; i++){
    // tao tr
    var tr = document.createElement('tr');
    for (var j=0; j < sanPham[i].length; j++) {
      //  tao td
      
        var td = document.createElement('td');
      //  dua du lieu vao td
         td.innerHTML = sanPham[i][j];
      //  dua td vao tr
        tr.appendChild(td);
    }
    // dua tr vao body
    tableElement.appendChild(tr);  
  }
 
}