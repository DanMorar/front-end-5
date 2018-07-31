document.getElementsByTagName("button").addEventListener("click", function start() {
  var random1 = Math.floor(Math.random() * 3);
  var random2 = Math.floor(Math.random() * 3);
  var choice1 = ["r", "s", "p"];
  var choice2 = ["r", "s", "p"];
  
  switch(choice1[random1] + choice2[random2] ) {
    case "rr":
    case "ss":
    case "pp":
      document.getElementById("message").innerText = "Draw, play again!";
    break;
      
    case "rs":
    case "sp":
    case "pr":
      document.getElementById("message").innerText = "User wins!";
    break;
      
    case "sr":
    case "ps":
    case "rp":
      document.getElementById("message").innerText = "Computer wins!";
         }
  
});


