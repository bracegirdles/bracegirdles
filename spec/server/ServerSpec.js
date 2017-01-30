// import { expect } from 'chai';
// import request from 'supertest';
var expect = require('chai').expect;
var request = require('supertest');

// ----------------------------------------------------------------------
// 'really-need' replaces Node's require with a more powerful version. In 
// addition to a path, it accepts an options object; one of the available
// options is to bust the cache before loading a module.
// ----------------------------------------------------------------------
// require = require('really-need');
// 
// UPDATE 01/30/17:
// ----------------
// 'really-need' does not work for node versions above v4.0.0.  We're
// using v6.1.0.  I'll keep the 'really-need' solution in the code
// (but commented out) as an educational resource, but it will not be
// utilized moving forward.

describe('Loading express', function () {
  
  var server;
  
  beforeEach(function () {
    // Line below utilizes 'really-need':
    // server = require('../../server/server.js', { bustCache: true });
    delete require.cache[require.resolve('../../server/server.js')];
    server = require('../../server/server.js');
  });

  afterEach(function () {
    server.close();
    console.log('Server now closed.');
  });

  it('Responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('404 errors everything else', function testPath(done) {
    console.log('Test 404');
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });

});

















/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

// var mysql = require('mysql');
// var request = require('request'); // You might need to npm install the request module!

// describe('Persistent Node Chat Server', function() {
//   var dbConnection;

//   beforeEach(function(done) {
//     dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'chat'
//     });
//     dbConnection.connect();

//        var tablename = ""; // TODO: fill this out

//     /* Empty the db table before each test so that multiple tests
//      * (or repeated runs of the tests) won't screw each other up: */
//     dbConnection.query('truncate ' + tablename, done);
//   });

//   afterEach(function() {
//     dbConnection.end();
//   });

//   it('Should insert posted messages to the DB', function(done) {
//     // Post the user to the chat server.
//     request({
//       method: 'POST',
//       uri: 'http://127.0.0.1:3000/classes/users',
//       json: { username: 'Valjean' }
//     }, function () {
//       // Post a message to the node chat server:
//       request({
//         method: 'POST',
//         uri: 'http://127.0.0.1:3000/classes/messages',
//         json: {
//           username: 'Valjean',
//           message: 'In mercy\'s name, three days is all I need.',
//           roomname: 'Hello'
//         }
//       }, function () {
//         // Now if we look in the database, we should find the
//         // posted message there.

//         // TODO: You might have to change this test to get all the data from
//         // your message table, since this is schema-dependent.
//         var queryString = 'SELECT * FROM messages';
//         var queryArgs = [];

//         dbConnection.query(queryString, queryArgs, function(err, results) {
//           // Should have one result:
//           expect(results.length).to.equal(1);

//           // TODO: If you don't have a column named text, change this test.
//           expect(results[0].text).to.equal('In mercy\'s name, three days is all I need.');

//           done();
//         });
//       });
//     });
//   });

//   it('Should output all messages from the DB', function(done) {
//     // Let's insert a message into the db
//        var queryString = "";
//        var queryArgs = [];
//     // TODO - The exact query string and query args to use
//     // here depend on the schema you design, so I'll leave
//     // them up to you. */

//     dbConnection.query(queryString, queryArgs, function(err) {
//       if (err) { throw err; }

//       // Now query the Node chat server and see if it returns
//       // the message we just inserted:
//       request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
//         var messageLog = JSON.parse(body);
//         expect(messageLog[0].text).to.equal('Men like you can never change!');
//         expect(messageLog[0].roomname).to.equal('main');
//         done();
//       });
//     });
//   });
// });
// Contact GitHub API Training Shop Blog About
// © 2017 GitHub, Inc. Terms Privacy Security Status Help