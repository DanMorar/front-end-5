$(onHtmLoaded)

function onHtmLoaded() {
  
  function listDogBreeds() {
    var listContainer = $('#listBreeds');
    $.ajax({
      url: 'https://dog.ceo/api/breeds/list/all',   
      method: 'GET',
      success: function(response) {
        console.log('Response', response);
        for (var i = 0; i < response.length; i++) {
          console.log(response.message[i]);
          var breed = '<h3>' + response.message[i] + '</h3>';
          listContainer.append(breed);
        }
        
      }
      
    });
  }
  
  
listDogBreeds();  
  
}