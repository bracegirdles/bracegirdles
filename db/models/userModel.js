const Sequelize = require('sequelize');
const db = require('../db.js');
const Post = require('./postModel.js');

let User = db.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    unique: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  cohort: Sequelize.STRING,
  status: Sequelize.STRING,
  github: {
    type: Sequelize.STRING,
    unique: true
  }
});

//Create a userId column in the Post table;
//Set the forignKey property to point to the user
Post.belongsTo(User);  

// Removed {foreignKey: 'userId'}) from line 37.  Was giving the following error:
// Unhandled rejection SequelizeDatabaseError: ER_DUP_FIELDNAME: Duplicate column name 'UserId'
// 
// Now foreign key defaults to UserId

//Enable association between user and post
User.hasMany(Post);

//Creates tables in MySql if they do not exist
//The force drops any existing tables beforehand
User.sync({force: true});
Post.sync({force: true});

module.exports = User;