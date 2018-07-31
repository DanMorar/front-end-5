  var possibilities = ["rock", "paper", "scissors"];
  var randomComputerValue = possibilities[Math.floor(possibilities.length * Math.random())];
  var randomUserValue = possibilities[Math.floor(possibilities.length * Math.random())];

  function play(computer, user) {
    if(computer === user) {
      console.log("Computer choice: " + randomComputerValue + " |" + "Users choice: " + randomUserValue +" |"+ "Play again!");
    }
    if(computer === "rock") {
      if(user === "paper") {
        console.log("Computer choice: " + randomComputerValue + " |" + "Users choice: " + randomUserValue +" |"+ "User wins!");
      }
        else {
          console.log("Computer choice: " + randomComputerValue + " |" + "Users choice: " + randomUserValue +" |"+ "Computer wins!");
        }    
    }
    if(computer === "paper") {
      if(user === "rock") {
        console.log("Computer choice: " + randomComputerValue + " |" + "Users choice: " + randomUserValue +" |"+ "Computer wins!");
      }
        else {
          console.log("Computer choice: " + randomComputerValue + " |" + "Users choice: " + randomUserValue +" |"+ "User wins!");
        }    
    }
    if(computer === "scissors") {
      if(user === "rock") {
        console.log("Computer choice: " + randomComputerValue + " |" + "Users choice: " + randomUserValue +" |"+ "User wins!");
      }
        else {
          console.log("Computer choice: " + randomComputerValue + " |" + "Users choice: " + randomUserValue +" |"+ "Computer wins!");
        }    
    }
  
}
play(randomComputerValue, randomUserValue);


