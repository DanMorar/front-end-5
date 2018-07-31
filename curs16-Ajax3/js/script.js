
$(onHtmLoaded)

function onHtmLoaded() {
  
  
var loadPosts = function() {
 $.ajax({
   url: "https://jsonplaceholder.typicode.com/posts",
   success: function(data) {
     console.log('Posts = ', data);
   }
 });
}


var loadPost = function(id) {
 $.ajax({
   url: "https://jsonplaceholder.typicode.com/posts/" + id,
   success: function(data) {
     console.log('Post = ', data);
   }
 });
}


//request to create a post
var createPost = function() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: 'POST',
    data: {
      title: 'Post by Anca',
      body: 'blabla by Anca',
      userId: 1
    },
   success: function(data) {
     console.log('Create post', data);  
     console.log('Create post with id', data.id); 
   } 
  });
}



// request to update a post
var editPost = function(id) {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/" + id,
    method: 'PUT',
    data: {
      title: 'Edit post',
      body: 'Edit post body',
      userId: 1
    },
    success: function(data) {
      console.log('Update post', data);
    }
  });
}


//REQUEST DE DELETE
var deletePost = function(id) {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/" + id,
    method: 'DELETE',
    success: function() {
      console.log('Post was deleted');
    }
  });
}



loadPosts();
loadPost(3);
loadPost(10);
loadPost(50);
  
createPost();
  
editPost(1);
editPost(10);
  
deletePost(4);
  
}