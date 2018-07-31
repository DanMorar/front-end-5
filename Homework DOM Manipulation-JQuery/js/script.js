$(document).ready(function() {
  $('button').on ('click', dataEntryValidation() {
    var firstName = $('#fname').val();
    var lastName = $('#lname').val();
    var message = $('textarea').val();
    var banner = $('#displayBanner');
      banner.text('Thank you for contacting us, ' + firstName);
  
    if(firstName === '' || lastName === '' || message === 'Your message here...') { 
    
    firstName.css( 'border', 'solid 1px red');
    lastName.css( 'border', 'solid 1px red');   
    message.text('Please type in your message !!!'); 
    }
    else {
    console.log('First Name: ' + firstName);
    console.log('Last Name: ' + lastName);
    console.log('Message : ' + message);
    banner.css ({
      'background-color': 'lightblue',
      'height': '25px',
      'border': 'solid 1px black',
      'margin': '0 auto',
      'border-radius': '5px',
      'margin-bottom': '5px'              
        });            
    }             
                    });
  
});
  

 


