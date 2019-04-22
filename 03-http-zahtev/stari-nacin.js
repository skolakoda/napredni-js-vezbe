const http = new XMLHttpRequest()

http.open('GET', 'http://192.168.0.104:8080/random')
http.send()

http.onload = function() {
  console.log(http.responseText)
}
