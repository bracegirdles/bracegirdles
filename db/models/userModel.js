import { Sequelize } from 'sequelize';
import Post from './postModel';


let User = Sequelize.define('user', {
  name: {
  	Sequelize.STRING,
  	allowNull: false
  },
  email: {
  	type:Sequelize.STRING,
  	unique: true
  },
  cohort: Sequelize.STRING,
  status: Sequelize.STRING,
  github: {
  	type:Sequelize.STRING,
  	unique: true
  }

});
// This connectiong to be made in the database
//User.hasMany(Post);

//Don't use force in production
Sequelize.sync({ force: true });

module.exports = User;