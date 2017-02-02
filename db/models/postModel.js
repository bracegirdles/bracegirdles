import db from '../db.js'


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

export default Post;
