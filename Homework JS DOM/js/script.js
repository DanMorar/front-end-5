

function dataEntryValidation() {
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var message = document.getElementsByTagName("textarea").value;
  var banner = document.getElementById("displayBanner");
      banner.innerText = 'Thank you for contacting us, ' + firstName;
  
  if(firstName === "" || lastName === "" || message === "Your message here...") { 
    
    document.getElementById("fname").style.border = 'solid 1px red';
    document.getElementById("lname").style.border = 'solid 1px red';   
    document.getElementsByTagName("textarea").innerHTML = "Please type in your message !!!"; 
  }
  else {
    console.log('First Name: ' + firstName);
    console.log('Last Name: ' + lastName);
    console.log('Message : ' + message);
    banner.style.backgroundColor = "lightblue";
    banner.style.height = "25px";
    banner.style.border = "solid 1px black";
    banner.style.width = "500px";
    banner.style.margin = "0 auto";
    banner.style.borderRadius = "5px";
    banner.style.marginBottom = "5px"; 
   }
}
 


