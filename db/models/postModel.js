const Sequelize = require('sequelize');
const db = require('../db');

let Post = db.define('Post', {
  title: {
    type: Sequelize.STRING,
    unique: true
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Post;
