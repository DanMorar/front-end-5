// empty object
var robot = {};
console.log("Robot = ", robot);

var robot = {
  model: "TRX3215",
  weight: 100
};
console.log("Robot = ", robot);

// add new property
robot.color = "red";
console.log("Robot = ", robot);

//update property
robot.weight = 99;
console.log("Robot = ", robot);


var robot = {
  model: "TRX3215",
  weight: 100,
  run: function () {
    console.log("The robot is running");
  }
};
console.log("Robot = ", robot);


//call robot method
robot.run();

//Typeof data
var name = "Dan";
console.log("Type of string" , typeof name);

var age = 10;
console.log("Type of string" , typeof age);

var isNull = null;
console.log("Type of string" , typeof isNull);

var isUndefined;
console.log("Type of string" , typeof isUndefined);

var list = [];
console.log("Type of array" , typeof list);

//if statement
var x = -2;
if (x > 0) {
  console.log("positive number x = ", x);
} else {
  console.log("negative number x = ", x);
}

var x = 0;
if (x > 0) {
  console.log("positive number x = ", x);
} else if (x === 0) {
  console.log("negative number x = ", x);
} else {
  console.log("negative number x = ", x);
}


var currentTime = prompt("enter time");
console.log(currentTime);

if (currentTime > 0 && currentTime <= 10 ) {
  console.log("Buna dimineata!");
} else if (currentTime >10 && currentTime < 16) {
  console.log("Buna ziua!");
} else if (currentTime < 0) {
  console.log("Ora invalida");
}else {
  console.log("Buna seara!");
}

// FOR statement
for (var i = 0; i <= 10; i++) {
  console.log("Index = ", i);
}


for (var i = 1; i <= 5 ; i++) {
//   console.log ("line = ", i);
  var line = "";
  for (var j = 1; j<=5; j++) {
//     console.log ("Column = ", j);
    line += (i * j) + " ";
//     console.log ("Value = ", value);
  }
  console.log("LINE" , line);
}



// //delete property
// delete robot.color;
// console.log("Robot = ", robot);


