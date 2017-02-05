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
//imported the router
const router = require('./routes.js')

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
// Routes (with Authentication):
// ----------------------------------------------------------------------------
<<<<<<< 21b3580fe7097cd72c85057b4b7480ef79b2be27
app.get('/', function(req, res) {
  if (util.checkUser) {
    res.redirect('/profile');
  } else {
    res.render('landing');
  }
});

app.get('/signup', function(req, res) {
  res.render('signup');
});

app.post('/signup', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var name = req.body.name;
  var email = req.body.email;
  var cohort = req.body.cohort;
  var status = req.body.status;
  var github = req.body.github;

  Users.findOne({where: {username: username}}).then(function(user) {
    if (!user) {
      bcrypt.hash(password, null, null, function(err, hash) {
        Users.create({
          username: username,
          password: hash,
          name: name,
          email: email,
          cohort: cohort,
          status: status,
          github: github
        }).then(function(user) {
          util.createSession(req, res, user);
        });
      });
    } else {
      alert('Account already exists!  Try again.');
      res.redirect('/signup');
    }
  });
});

app.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  Users.findOne({where: {username: username}}).then(function(user) {
    if (!user) {
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


// ----------------------------------------------------------------------------

const server = app.listen(3000, '127.0.0.1', () => {
  const port = server.address().port;
  console.log('Basic server for HRAN listening at port', port);
});

module.exports = server;