const Sequelize = require('sequelize');

//Create a database with the name alumnidb
//Serve with the username of root
//No password for now !!
let db = new Sequelize('alumnidb', 'root', '');

db.authenticate()
  .then( () => { console.log('Connection successful!'); })
  .catch( err => { console.error('Unable to connect', err); });

module.exports = db;