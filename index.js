// function ajax(opts){
//   var request = new XMLHttpRequest()
//   request.open(opts.method, opts.url, true)
//   request.onload = function(){
//     if (this.status === 200 ) {
//       var data = JSON.parse( this.response )
//       opts.success(data)
//     }
//   }
//
//   request.onerror = function(){
//     if (opts.error) {
//       opts.error()
//     }
//   }
//
//   request.send()
// }

$(document).ready(function(){
  console.log('Document ready!')

  // When I submit a form
  $('form#book-search').on('submit', function(event){
    event.preventDefault()
    console.log("Submitted Form!!!")
    var url = "https://www.googleapis.com/books/v1/volumes?q=ruby+programming"
    // I want to hit an API
    $.ajax({
      url: url,
      success: function(data){
        console.log("Abstraction is cool!!!!")
        console.log(data)
      }
    })
  })
  // Take the results that I get
  // and render them out to the page
})
