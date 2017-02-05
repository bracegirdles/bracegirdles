const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

//Router consumes the routes made available by Sequelize
//To talk to the database
router.get('/users',controller.users.get);
router.post('/users',controller.users.post);
router.get('/posts',controller.users.get);
router.post('/posts',controller.users.post);

//Export the router with the Sequelize routes
module.exports = router;