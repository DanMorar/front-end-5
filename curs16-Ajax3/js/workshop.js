$(onHtmLoaded)

function onHtmLoaded() {
  var apiUrl = "https://jsonplaceholder.typicode.com/posts/";
  
  getPosts()
  
  $('#deletePost').on('click', deletePost);
  
  function deletePost() {
    var id = $('[name=delete]').val();
    $.ajax({
      url: apiUrl + id,
      method: 'DELETE',
      success: function() {
        alert('Post with id ' + id +  'deleted');
      }
    });
  }
  
  function getPosts() {
    var listContainer = $('#listPosts');
    $.ajax({
      url: apiUrl,   
      method: 'GET',
      success: function(response) {
//         console.log('Response', response);
        for (var i = 0; i < response.length; i++) {
//           console.log(response[i].title);
          var title = '<h3>' + response[i].title + '</h3>';
          listContainer.append(title);
        }
        
      }
      
      
    
      
    });
  }
  
}