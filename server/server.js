var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.status(200).send('Status Code: 200' + '<br> <br>' + 'Victory.');
});

var server = app.listen(3000, '127.0.0.1', function () {
  // console.log('This is what server.address() does: ', server.address());
  // console.log(server);  
  var port = server.address().port;
  console.log('Basic server for HRAN listening at port', port);
});

module.exports = server;