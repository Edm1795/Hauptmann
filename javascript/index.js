// ============== Javascript Practice, Remove when no longer needed ========= //

// document.getElementById("date").innerHTML = Date();

// Overlay code //

 function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}


var message = "in global";
console.log("global: message " + message);

var organization = new Object();
organization.name = "Hauptmann's Music Theory";
console.log(organization);
organization.founder = "Andrew Switzer";
console.log(organization);
console.log(organization);

var s;
s = "Edmonton";
console.log(s);

// console.log(q);

// var q;
// console.log(q);

function Circle (radius) {
  this.radius = radius;
}
Circle.prototype.getArea =
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  }

var myCircle = new Circle(10);
console.log(myCircle.getArea());

var myCircleTwo = new Circle(20);
console.log(myCircleTwo.getArea());

var w = 0;
w++;
console.log("w now = "+ w);

array = [1,2,3,4,5,6,7,8];
console.log(array.length);

var t = "Andrew";
function print () {
  var t ="Baum"
  console.log("The name is: " + t);
}
print();

var qw = {};
qw.names = "Andrew";
console.log(qw)


// =============== Assignment ==================== //
console.log("")
console.log("=======Assignment begin ===========")
NameArray = ["Andrew", "Jen", "Larry", "Robinson", "jewey"];

console.log(NameArray)

// iterate through array and if first letter of name is J or j add it to the name
// otherwise just print the name
for (i = 0; i < NameArray.length; i++) {
  if (NameArray[i][0] == "J" || NameArray[i][0] == "j") {
  console.log(i + " " + "Hello " + NameArray[i][0] + NameArray[i]);
}
  else {console.log(i + " " + "Hello " + NameArray[i]);
}
}
console.log("===========Assignment End ============");
 // =================== More Practice ================ //

 // console.log(document.getElementById("Title-Page"));


// function sayHello () {
//  	var name = document.getElementById("name").value;
//  	var message = "Hallo  " + name;
//  	document.getElementById("content")
//  	  .innerHTML = message

 // }
// ========Does not work for operating menu by click on body
 // /** CLOSE MAIN NAVIGATION WHEN CLICKING OUTSIDE THE MAIN NAVIGATION AREA**/
 // $(document).on('click', function (e){
 //     /* bootstrap collapse js adds "in" class to your collapsible element*/
 //     var menu_opened = $('#navbarSupportedContent').hasClass('in');
 //
 //     if(!$(e.target).closest('#navbarSupportedContent').length &&
 //         !$(e.target).is('#navbarSupportedContent') &&
 //         menu_opened === true){
 //             $('#navbarSupportedContent').collapse('toggle');
 //     }
 //
 // });

//This will open and close the menu when clicking anywhere on the page


// document.querySelector("body")
//               		.addEventListener("click",
//               			function (event) {
//                       $("#navbarSupportedContent").collapse('toggle');
//               					}
//                       );
// === Works for operating menu by click anywhere on page
//  $(document).on('click', function (e){
//     /* bootstrap collapse js adds "in" class to your collapsible element*/
//
//             $('#navbarSupportedContent').collapse('toggle');
//     }
// )

// using pure JS to collapse menu bears. Does not work

// console.log(this);
// console.log("document log:" + document)
// console.log(document.querySelector("navbarSupportedContent"));
