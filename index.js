function fetchAndRenderBooks(query){
  var url = `https://www.googleapis.com/books/v1/volumes?q=${query}`
  $.ajax({
    url: url,
    success: renderBooks
  })
}

function renderBooks(data){
    console.log("Abstraction is cool!!!!")
    console.log(data)
    const lis = data.items.map(function(book){
      return `<li>${book.volumeInfo.title}</li>`
    })
    $('#books').html( lis.join('') )
}

$(document).ready(function(){
  const $input = $('#query')
  // When I submit a form
  $('#book-search').on('submit', function(event){
    event.preventDefault()
    const query = $input.val()
    $input.val('')
    fetchAndRenderBooks(query)
  })
})
