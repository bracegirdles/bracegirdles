// Include Modules:
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const db = require('../db/db.js');
const app = express();

// Server Side Rendering:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Static files to server:
console.log(path.resolve('dist'));
app.use(express.static(path.resolve('dist')));

// ----------------------------------------------------------------------------
app.get('/', (req, res) => {
  connection.query('SELECT * FROM User', function(err, rows) {
    if (err) { 
      console.error(err);
    } else {
      console.log(rows);
    }
  });
  res.render('index');
});

// More of above to come...
// ----------------------------------------------------------------------------

// Establish server connection at localhost:3000
const server = app.listen(3000, '127.0.0.1', () => {
  const port = server.address().port;
  console.log('Basic server for HRAN listening at port', port);
});

module.exports = server;