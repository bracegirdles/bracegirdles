const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Status Code: 200' + '<br> <br>' + 'Victory.');
});

const server = app.listen(3000, '127.0.0.1', () => {
  // console.log('This is what server.address() does: ', server.address());
  // console.log(server);  
  const port = server.address().port;
  console.log('Basic server for HRAN listening at port', port);
});

module.exports = server;