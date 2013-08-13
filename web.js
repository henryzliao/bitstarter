var fs = require('fs');
var htmlfile = 'index.html';
//var buf = new Buffer(html_string, 'utf-8');
//console.log("buffer is " + buf);

//var buffer = new Buffer(html_string, "utf-8");
//buffer.write(html_string,"utf-8");
//buffer.toString('utf-8');


var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
//  response.send(buf);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
