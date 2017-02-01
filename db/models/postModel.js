import { Sequelize } from 'sequelize';


let Post = Sequelize.define('user', {
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
