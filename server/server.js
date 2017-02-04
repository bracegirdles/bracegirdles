// Include Modules:
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const util = require('../lib/utility.js');
const mysql = require('mysql');
const db = require('../db/db.js');

const app = express();

// Server Side Rendering:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Parse JSON and Parse Forms (signup/login):
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files to server:
app.use(express.static(path.resolve('dist')));

// Enable sessions:
app.use(session({
  secret: 'shhh, it\'s a secret',
  resave: false,
  saveUninitialized: true
}));

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
app.get('/', util.checkUser, function(req, res) {
  res.render('index');
});

// Authentication Routes:
app.get('/login', function(req, res) {
  res.render('login');
});

// -------------------------------Revisit--------------------------------------
app.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  new User({ username: username })
    .fetch()
    .then(function(user) {
      if (!user) {
        res.redirect('/login');
      } else {
        // BASIC VERSION
        // bcrypt.compare(password, user.get('password'), function(err, match) {
        //   if (match) {
        //     util.createSession(req, res, user);
        //   } else {
        //     res.redirect('/login');
        //   }
        // });
        // ADVANCED VERSION -- see user model
        user.comparePassword(password, function(match) {
          if (match) {
            util.createSession(req, res, user);
          } else {
            res.redirect('/login');
          }
        });
      }
    });
});
// ----------------------------------------------------------------------------

app.get('/logout', function(req, res) {
  req.session.destroy(function() {
    res.redirect('/login');
  });
});

app.get('/signup', function(req, res) {
  res.render('signup');
});

// -------------------------------Revisit--------------------------------------
app.post('/signup', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  new User({ username: username })
    .fetch()
    .then(function(user) {
      if (!user) {
        // BASIC VERSION
        // bcrypt.hash(password, null, null, function(err, hash) {
        //   Users.create({
        //     username: username,
        //     password: hash
        //   }).then(function(user) {
        //       util.createSession(req, res, user);
        //   });
        // });
        // ADVANCED VERSION -- see user model
        var newUser = new User({
          username: username,
          password: password
        });
        newUser.save()
          .then(function(newUser) {
            util.createSession(req, res, newUser);
          });
      } else {
        console.log('Account already exists');
        res.redirect('/signup');
      }
    });
});
// ----------------------------------------------------------------------------

// More of above to come...
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// SHOULD THIS GO IN A SEPARATE FILE CALLED index.js??????
// Establish server connection at localhost:3000
const server = app.listen(3000, '127.0.0.1', () => {
  const port = server.address().port;
  console.log('Basic server for HRAN listening at port', port);
});

module.exports = server;