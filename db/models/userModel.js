import db from '../db.js';
import Post from './postModel';


let User = db.define('User', {
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
Post.belongsTo(User);

//Enable association between user and post
User.hasMany(Post);


//Creates tables in MySql if they do not exist
//The force drops any exissting tables beforehand
User.sync({force: true});
Post.sync({force: true});

export default User;