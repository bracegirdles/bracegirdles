// Include Modules:
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt-nodejs');
const util = require('../lib/utility');
const mysql = require('mysql');
const db = require('../db/db');
const Users = require('../db/models/userModel');
const Posts = require('../db/models/postModel');

const app = express();

// Import Router:
// const router = require('./routes.js');    // CHANGE HERE
const controller = require('./controller.js');

// Server Side Rendering:
app.set('views', path.join(__dirname, 'views'));  // CHANGE HERE
app.set('view engine', 'pug');                    // CHANGE HERE

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
// Routes (with Authentication):
// ----------------------------------------------------------------------------
app.get('/', util.checkUser, function(req, res) {
  res.render('feed');
});

app.get('/signup', function(req, res) {
  res.render('signup');
});

app.post('/signup', function(req, res) {
  console.log('req: ', req);
  controller.users.getOne(req.username).then(function(user) {
    if (!user) {
      bcrypt.hash(password, null, null, function(err, hash) {
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

app.get('/profile', util.checkUser, function(req, res) {
  res.render('profile');
});

app.get('/feed', util.checkUser, function(req, res) {
  res.render('feed');
})


// ----------------------------------------------------------------------------

const server = app.listen(3000, '127.0.0.1', () => {
  const port = server.address().port;
  console.log('Basic server for HRAN listening at port', port);
});

module.exports = server;
