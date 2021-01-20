
function addElement(){
    var newDiv = document.createElement("div1");
    var newContent = document.createTextNode("Hi there and greatings!");
    newDiv.appendChild(newContent);
    var currentDiv =document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}



// function addElement () { 
//     // create a new div element 
//     var newDiv = document.createElement("div"); 
//     // and give it some content 
//     var newContent = document.createTextNode("Hi there and greetings!"); 
//     // add the text node to the newly created div
//     newDiv.appendChild(newContent);  

//     // add the newly created element and its content into the DOM 
//     var currentDiv = document.getElementById("div1"); 
//     document.body.insertBefore(newDiv, currentDiv); 
// }

function myFunction1(){
    var div = document.createElement("div");
    var text = document.createTextNode("day la ...");
    div.appendChild(text);
    document.body.appendChild(div);
}
function myButton(){
    var buTton = document.createElement('button');
    buTton.innerHTML= "Click me";
    document.body.appendChild(buTton);
}
