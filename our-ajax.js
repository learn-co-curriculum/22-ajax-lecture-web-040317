// DEMO PURPOSES 
function ajax(opts){
  var request = new XMLHttpRequest()
  request.open(opts.method, opts.url, true)
  request.onload = function(){
    if (this.status === 200 ) {
      var data = JSON.parse( this.response )
      opts.success(data)
    }
  }

  request.onerror = function(){
    if (opts.error) {
      opts.error()
    }
  }

  request.send()
}
