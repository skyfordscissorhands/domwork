// console.log("Javascript is alive!");
// / Change the greeting from "Hello, There!" to "Hello, World!".
// change greeting id
document.getElementById("greeting").innerHTML= "Hello, World!";
// Set the background color of each <li> to yellow.
// change background color
var list_items = document.querySelectorAll("li");
  for (var i = list_items.length - 1; i >= 0; i--) {
    list_items[i].style.backgroundColor = "yellow"
    }
// // Create an image tag, set its src attribute to 
// http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, and append the to the #greeting div.
// // ad image tag




    let note= document.createElement("img");
    note.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
    document.getElementById("greeting").appendChild(note);



let todo= document.createElement("ul");
todo.className="todo-items";
document.body.appendChild(todo);
// Go through the array ['make coffee','eat donut','change diapers','drive to work'] and create an
//  li element for each item e.g. <li>make coffee</li>
let array = ['make coffee','eat donut','change diapers','drive to work'];
// Add each newly created li element to your ul of class "todo-items";
for (var i = 0; i< array.length; i++) {
    let listItem= document.createElement("li");
    listItem.innerHTML = array[i];
    document.getElementsByClassName("todo-items")[0].appendChild(listItem);
};
// Add the class of selected to an <li> when it is clicked.
//  Remove it from any other lis as well.

let essentialsLi =document.querySelectorAll('#essentials li');
for(var i = 0; i<essentialsLi.length; i++) {
    essentialsLi[i].addEventListener("click", handleEssentials)
      
}
function handleEssentials (event) {
    // clicked is the list itme just clicked by the user
let clicked = event.target;
// first job remove selected class
let oldLi = document.querySelector("#essentials li.selected");
oldLi.className= "";
// second  job make clicled li have selected class
clicked.className="selected";
// 3rd job change image 
let img = document.querySelector('img[alt='+ oldLi.textContent+ "]");
img.src= "images/" + clicked.textContent + ".jpeg";
img.setAttribute('alt',clicked.textContent);
}
// Change the image to be the most recently clicked food item.


// When the gray div is moused over, it's removed from the DOM.
// document.querySelector('.over')addEventListener('mouseout',);
// document.querySelector('ghosting')addEventListener();