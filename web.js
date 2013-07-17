var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var inputFile = "index.html";
var buf = new Buffer(fs.readFileSync(inputFile));

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 8080//5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
