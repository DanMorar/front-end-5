// 1.display in the console the numbers from 1 to 20
for (var i = 1; i <= 20; i++) {
  console.log("The number is : ", i);
}

// 2.display in the console the odd numbers from 1 to 20
for (var i = 1; i <= 20; i += 2) {
  console.log("The odd number is: ", i);
}

// 3.compute the sum of the elements of an array and display it in the console
var numbers = [1,2,3,4,5];
var sum = 0;
for (var i = 0; i <= numbers.length - 1; i++) {
  sum = sum + numbers[i];
}
console.log("The sum is: ", sum);


// 4.compute the maximum of the elements of an array and display it in the console 
var numbers = [-10,2,35,4,5];
var max = numbers[0];
for ( var i = 0; i < numbers.length; i++) {
  if ( numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("The max number in the array is: ", max);


// 5.compute how many times a certain element appears in an array
var numbers = [1,5,3,5,5];
var count = 0;
  for ( var i = 0; i < numbers.length; i++) {
    if ( numbers[i] === 5 ) {
      count++;
    }
  }
console.log("The number 5 appears", count, "times in the array.");


// BMI Homework -with IF
var name;
var gender;
var height;
var weight;
var bmi = weight / (height * height);
if ( bmi < 18.5) {
    console.log(name + " | " + gender + " | " + "BMI: " + bmi + " | " + "underweight");
    }
else if ( 18.5 <= bmi < 25) {
    console.log(name + " | " + gender + " | " + "BMI: " + bmi + " | " + "normal");
    }
else if ( 25 <= bmi < 30) {
    console.log(name + " | " + gender + " | " + "BMI: " + bmi + " | " + "overweight");
    }
else {
    console.log(name + " | " + gender + " | " + "BMI: " + bmi + " | " + "obese");
    }
    

// BMI Homework -with SWITCH
var name;
var gender;
var height;
var weight;
var bmi = weight / (height * height);
switch (bmi) {
  case bmi < 18.5 :
    console.log(name + " | " + gender + " | " + "BMI: " + bmi + " | " + "underweight");
    break;
  case 18.5 <= bmi < 25 :
    console.log(name + " | " + gender + " | " + "BMI: " + bmi + " | " + "normal");
    break;
  case 25 <= bmi < 30 :
    console.log(name + " | " + gender + " | " + "BMI: " + bmi + " | " + "overweight");
    break;
  case bmi >= 30 :
    console.log(name + " | " + gender + " | " + "BMI: " + bmi + " | " + "obese");
  }


