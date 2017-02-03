// Include Modules:
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();

// Server Side Rendering:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Static files to server:
console.log(path.resolve('dist'));
app.use(express.static(path.resolve('dist')));

// Connect to the Database:
// let connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'user',
//   password: 'password'
// });

// Query database and set the database we will be using:
// connection.query('USE alumnidb');

app.get('/', (req, res) => {
  res.render('index');
});

// more of above to come...

const server = app.listen(3000, '127.0.0.1', () => {
  // console.log('This is what server.address() does: ', server.address());
  // console.log(server);  
  const port = server.address().port;
  console.log('Basic server for HRAN listening at port', port);
});

module.exports = server;