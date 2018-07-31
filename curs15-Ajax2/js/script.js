
$(domLoaded)

function domLoaded() {
  console.log('Dom loaded')
  
  
  
  var getShowsData = function (dynamicValue) {
  $.ajax({
    url: "http://api.tvmaze.com/search/shows?q=" + dynamicValue,  //3.build API url based on input value
    method: "GET",
    success: manageData
    })
  }
  
   $('#invoke-ajax-test-call').on('click', function() {
    var query = $('input').val();   //2.get input value in JS
    getShowsData(query) //4. invoke ajax call with dynamic url
  })
  
  function manageData (data, textStatus, jqXHR) {
    $(".container").html(renderHtml(data))
  }
  
  function renderHtml(data) {
    var html = `<ul>`
     for (i = 0; i < data.length; i++) {
       var name = data[i].show.name;
       var score = data[i].score;
       var url = data[i].show.url;
       html += `<li>` + name + ' ' + score + ' ' + ' ' + '<a href = "' + url + '" target = "_blank" >' + url +  '</a>' + `</li>`  

      }
       html += `</ul>`
       return html;
        
  }
}