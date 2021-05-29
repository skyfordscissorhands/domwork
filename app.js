// console.log("Javascript is alive!");
// / Change the greeting from "Hello, There!" to "Hello, World!".
// change greeting id
document.getElementById("greeting").innerHTML= "Hello, World!";
// Set the background color of each <li> to yellow.
// change background color
var list_items = document.querySelectorAll("li");
  for (var i = list_items.length - 1; i >= 0; i--) {
    list_items[i].style.backgroundColor = "yellow"
    };
// // Create an image tag, set its src attribute to 
// http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, and append the to the #greeting div.
// // ad image tag
let newPic = document.getElementById("img")
// // // image source
newPic.src= "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif"
// // // Create and add a ul element to the end of the body with a class of "todo-items"
// // // add pic to page
// document.greeting.appendChild(newPic);
// Go through the array ['make coffee','eat donut','change diapers','drive to work'] and create an
//  li element for each item e.g. <li>make coffee</li>

// Add each newly created li element to your ul of class "todo-items";