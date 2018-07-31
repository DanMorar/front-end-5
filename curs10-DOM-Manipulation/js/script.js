//get element by ID
console.log("Comments list" , document.getElementById("comments-list"));

 window.addEventListener("load", function(event) {
   console.log("All resources finished loading!");
 });



//when document obj is available
 document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function  onHtmlLoaded() {
  console.log("DOM fully loaded and parsed");
  
  //by ID
  console.log("Comments list" , document.getElementById("comments-list"));
  
  // by class
  console.log("Comments items" , document.getElementsByClassName("comments-item"));
  
  //first by class
  console.log("First comment" , document.getElementsByClassName("comments-item")[0]);
  
  //by tag name
  console.log("First comment" , document.getElementsByTagName("section"));
  
  // second by tag
  console.log("Second comment" , document.getElementsByTagName("section")[1]);
  
  // by class & tag
  console.log("First comment" , document.querySelector("section.comment-item"));
  
  // all by class & tag
  console.log("Comments items" , document.querySelectorAll("section.comment-item"));
  
  // by element 
  console.log("Users for comment" , document.querySelectorAll("section.comment-item strong"));
  
  

  // change h1 content
  
  var h1 = document.querySelector("h1");
  h1.innerText = "JS DOM Manipulation New" // as string
  console.log("H1 text", h1.innerText);
  
  h1.innerHTML = "JS DOM Manipulation <em>New</em" // as html
  console.log("H1 html", h1.innerHTML);
  
  //manipulate attribute
  var h2 = document.querySelector("h2");
  h2.setAttribute("title", "Comments list")  //set attribute
  console.log("Get attribute", h2.getAttribute("title"));
  h2.id = "comments-list-id";
  console.log("Comments list id", h2.id);
  
  
  // change style
  var commentsContainer = document.getElementById("comments-list");
  commentsContainer.style.border = "solid 1px green";
  
  var commentsItems = document.getElementsByClassName("comment-item");
  for (var i =0; i < commentsItems.length; i++) {
    commentsItems[i].style.border = "solid 1px red";
  }
  
  
  //add new DOM elements
  var commentItem = document.createElement("section");
  commentItem.className = "comment-item";
  commentItem.innerHTML = '<h3>New comment</h3>' +
                           '<p>New comment content<strong>author</strong></p>'
  commentsContainer.appendChild(commentItem); 
  
  
  //remove first comment Item
  var commentItem = document.querySelector('section.comment-item');
  commentsContainer.removeChild(commentItem);
  
  
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
    var comment = list[i];
    var item = document.createElement('section');
    item.className = 'comment-item';
    item.innerHTML = '<h3>' + comment.title + '</h3>' + 
                      '<p>' + comment.body + '<strong>' + comment.author + '</strong' + '</p>';
    commentsContainer.appendChild(item);
  }
  var btnSearch = document.getElementById('btn-search');
  btnSearch.addEventListener('click', onSearch);
//   btnSearch.addEventListener('mouseover', onHover);
  
  
  function onSearch() {
   alert(1);
 }
  
  //unbind from click event
  //btnSearch.removeEventListener('click', onSearch);
  
}

