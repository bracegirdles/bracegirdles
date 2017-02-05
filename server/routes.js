const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

//Router consumes the routes made available by Sequelize
//To talk to the database
router.get('/users',controller.methods.users.get);
router.post('/users',controller.methods.users.post);
router.get('/posts',controller.methods.users.get);
router.post('/posts',controller.methods.users.post);

//Export the router with the Sequelize routes
module.exports = router;