function myFirstFunction() {
  console.log("My first JS Function");
}

// call the funtion
myFirstFunction();

function myFirstFunctionReturn() {
  return "My first js function return";
}

var message = myFirstFunctionReturn();

document.write(message);
document.writeln("<strong>" + message + "</strong");


function displayStars() {
  var line = "";
  for (i = 0; i < 4; i++) {
   line += "*";
   console.log(line);
  }
}
displayStars();
displayStars();

// functions with params
function displayStars1(nr) {
  var line = "";
  for (i = 0; i < nr; i++) {
   line += "*";
   console.log(line);
  }
}
displayStars1(4);
displayStars1(2);
displayStars1(9);

// function with default value for param
function displayStars2(nr = 4, char = "*") {
  var line = "";
  for (var i = 0; i < nr; i++) {
   line += char;
   console.log(line);
  }
}
displayStars2();
displayStars2(2);
displayStars2(4, "-");

var fname = "Ana";
var lname = "Pop";
function displayName(fname, lname) {
  console.log(fname + " " + lname);
  fname = "Ion";
  console.log("Inside function fname", fname); // Ion
}
displayName(fname, lname);
console.log("Outside function fname", fname); //Ana


function displayNameObject(person) {
  console.log(person.fname + " " + person.lname);
  person.fname = "Ion";
  console.log("Inside function fname", person.fname); // Ion
}
var person = {fname: "Ana", lname: "Pop"};
displayNameObject(person);
console.log("Outside function fname", person.fname); // Ion


//  statement function
function statementFunction() {
  console.log("Statement function");
}
statementFunction();


// Expression function
var expFunction = function() {
  console.log("Exp function");
}
expFunction();


// IIFE self invoking function
(function() {
  console.log("IIFE");
})();



// function with function as parameter
function testFunction() {
  alert("Exec from another function");
}
function execOtherFunction(testFunction){
  testFunction();
}
execOtherFunction(testFunction);




// variables scope
var a = 1;   //global
b = 2;   //global
window.c = 3;   //global

function displayVariable() {
  var d = 4;   //local
  e = 5;    //global
  console.log("inside variable d =", d);
  console.log("inside variable e =", e);
}
displayVariable();
//console.log("outside variable d =", d);
console.log("outside variable e =", e);




// Closure
var x = 1; //global
function firstF() {
  var y = 2;  //local firstF
  secondF();
  
  function secondF() {
    var z = 3; //local secondF
    w = 4;
    console.log("second x =", x); // 1
    console.log("second y =", y);  // 2
    console.log("second z =", z);  // 3
  }
  
  console.log("first x =", x); // 1
  console.log("first y =", y);// 2
  //console.log("second z =", z); // 3
}
firstF();
console.log("first x =", x);  // 1
//console.log("first y =", y);  // undefined
//console.log("second z =", z);  //  undefined
console.log("w =", w);  // 4




