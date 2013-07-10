var fs = require('fs');
var html_string = fs.readFileSync('index.html');
console.log("html string is " + html_string);

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(html_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
