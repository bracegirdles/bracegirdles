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

//Enable association between user and post
User.hasMany(Post);

//Create a userId column in the Post table;
//Set the forignKey property to point to the user
Post.belongsTo(User);

// Removed {foreignKey: 'userId'}) from line 37.  Was giving the following error:
// Unhandled rejection SequelizeDatabaseError: ER_DUP_FIELDNAME: Duplicate column name 'UserId'
// 
// Now foreign key defaults to UserId

// db.sync();     THIS WILL DROP ANY EXISTING TABLES, SO ONLY EXECUTE WHEN INITIALIZING THE DB.

module.exports = User;