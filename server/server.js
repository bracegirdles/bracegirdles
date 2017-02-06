// Include Modules:
const express = require('express');
const path = require('path');
const app = express();

// Database related
const db = require('../db/db');
const controller = require('./controller.js');
const Users = require('../db/models/userModel');
const Posts = require('../db/models/postModel');
const bcrypt = require('bcrypt-nodejs');

// Middleware & helpers
const bodyParser = require('body-parser');
const session = require('express-session');
const util = require('./utility');

// Server Side Rendering:
// We use pug to render the individual pages
// In the views folder there are .html and .pug pairs
// If you'd like to add more routes, be sure to add both!
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Parse JSON and Parse Forms (signup/login):
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve('dist')));

// Enable sessions:
app.use(session({
  secret: 'shhh, it\'s a secret',
  resave: false,
  saveUninitialized: true
}));


// ----------------------------------------------------------------------------
// Public Facing Routes (non-authentication):
// ----------------------------------------------------------------------------

app.get('/signup', function(req, res) {
  res.render('signup');
});

app.post('/signup', function(req, res) {
  console.log('req: ', req);
  controller.users.getOne(req.username).then(function(user) {
    if (!user) {
      bcrypt.hash(req.password, null, null, function(err, hash) {
        controller.users.post(req, res).then(function(user) {
          util.createSession(req, res, user.id);
        });
      });
    } else {
      alert('Account already exists!  Try again.');
      res.redirect('/signup');
    }
  });
});

app.get('/login', function(req, res) {
  res.render('landing');
});

app.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log('req.body.username: ', req.body.username);

  controller.users.getOne(username).then(function(user) {
    if (!user) {
      console.log('No such user.');
      res.redirect('/');
    } else {
      bcrypt.compare(password, user.get('password'), function(err, match) {
        if (match) {
          util.createSession(req, res, user);
        } else {
          res.redirect('/');
        }
      });
    }
  });
});

app.get('/logout', function(req, res) {
  req.session.destroy(function() {
    res.redirect('/');
  });
});

// ----------------------------------------------------------------------------
// Routes (with Authentication):
// ----------------------------------------------------------------------------

app.get('/', util.checkUser, function(req, res) {
  res.render('feed');
});

app.get('/profile', util.checkUser, function(req, res) {
  res.render('profile');
});

app.get('/feed', util.checkUser, function(req, res) {
  res.render('feed');
})

app.get('/settings', util.checkUser, function(req, res){
  res.render('settings');
})
// ----------------------------------------------------------------------------

const server = app.listen(3000, '127.0.0.1', () => {
  const port = server.address().port;
  console.log('Basic server for HRAN listening at port', port);
});

module.exports = server;
