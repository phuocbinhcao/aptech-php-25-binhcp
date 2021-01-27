$('#search').click(function () {
    $.ajax({
        type: 'GET',
        url: 'data.json',
        data: $('#cityDetails').serialize(),
        dataType: "json", //to parse string into JSON object,
        
        
        success: function (data) {
           
            if (data) {
                // var len = data.length;
                var txt = "";
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        for (var j = 0; j < data[i].length; j++) {
                            
                                if (data[i][j].id && data[i][j].name) {
                                    txt += "<tr><td>" + data[i][j].id + "</td><td>" + dulieu[i][j].name + "</td></tr>";
                                }
                            
                        }
                    }
                    if (txt != "") {
                        $("#table").append(txt).removeClass("hidden");
                    }
                }
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('error: ' + textStatus + ': ' + errorThrown);
        }
    });
    return false;//suppress natural form submission
});

// $('#search').click(function() {
//     alert("submit handler has fired");
//     $.ajax({
//         type: 'GET',
//         url: 'cityResults.htm',
//         data: $('#cityDetails').serialize(),
//         success: function(data){ 
//             alert(data);    
//         },
//         error: function(jqXHR, textStatus, errorThrown){
//             alert('error: ' + textStatus + ': ' + errorThrown);
//         }
//     });
//     return false;//suppress natural form submission
// });