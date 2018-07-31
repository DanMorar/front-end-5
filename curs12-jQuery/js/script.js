// DOM loaded
$(onHtmlLoaded);

function onHtmlLoaded() {
  console.log('On Html loaded');
  
  
  // by id -jquery element
  console.log('Comment list', $('#comments-list'));
   // by id -native dom element
  console.log('Comment list', $('#comments-list')[0]);
  
  // by class 
  console.log('Item', $('.comment-item'));
  
  //by tag
  console.log('Header', $('h1'));
  
  // query selector
  console.log('Author', $('section.comment-item strong'));
  
  
  //modify content
  var h1 = $('h1');
  h1.text('Jquery DOM Manipulation New');
  h1.html('Jquery DOM Manipulation <em>New</em>');
  
  // set attributes
  var h2 = $('h2');
  h2.attr('title' , 'Comments List');  // set attr
  console.log('H2 title', h2.attr('title'));  // get attr
  
  //manipulate CSS
  var commentsContainer = $('#comments-list');
  commentsContainer.css('border', 'solid 1px green');
  commentsContainer.css({
    color: 'blue',
    background: 'gray'
  });
  console.log('Comments list border' , commentsContainer.css('border'));
  
  
  //add border to each comment
  var commentItems = $('.comment-item');
  commentItems.css('border' , 'solid 5px pink');
  
  
  // add new comment
  var comment = '<section>' + 
                  '<h3>New comment</h3>' + 
                  '<p>Content <strong> A B</strong></p>' +
                '</section>';
  commentsContainer.append(comment);
  
  
  // add comments list
  var list = [
    {
      title: 'Title 1',
      body: 'Lorem ipsum...',
      author: 'Ion Pop'
    },
    {
      title: 'Title 2',
      body: 'Lorem ipsum...',
      author: 'Ana Pop'
    },
  ];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var comment = '<section>' + 
                  '<h3>' + item.title + '</h3>' + 
                  '<p>' + item.body + '<strong>' + item.author + '</strong></p>' +
                '</section>';
   commentsContainer.append(comment);
  }
  
  
//remove element
commentItems.first().remove();
  

  //bind  events
  var btnSearch = $('#btn-search');
  btnSearch.on('click' , function() {
//     alert(1);
    
    //get search value
    var search = $('input[name="search"]').val();
    console.log('Search value' , search);
  });
  
  
  
  
}