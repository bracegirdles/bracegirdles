const User = require('../db/models/userModel');
const Post = require('../db/models/postModel');
const db = require('../db/db.js');

db.sync();

module.exports = {
  posts: {
    get: (req, res) => {
    //might need to pass in parameters in findall
    Post.findAll()
    //example of findAll parameter
    //findAll({where : {username : req.body.username}})
    .then((message) => {
      res.json(message)
    })

    },
    post: (req, res) => {
     //check for relation between user and post and pass it in
     //as a param in findorcreate
      User.findOrCreate()
      .spread(() => {
        Post.create({
          title: req.body.title,
          content: req.body.content
        })
        .then((message) => {
          message.save();
        })
        .then(() => {
      	  res.sendStatus(201);
        })
      })
    }
  },
  users: {
    get: (req, res) => {
      //Pass in parameters as object with where as property
      // value as object and the parameters as key value pair
      User.findAll([params])
      .then((foundPosts) => {
      	//This will be an array so looping will be necessary
        res.json(foundPosts)
      })
    },
    post: (req, res) => {
      User.create({
        name: req.body.username,
        email: req.body.email,
        cohort:req.body.cohort,
        status: req.body.status,
        github: req.body.github
      })
      .then((user) => {
      	user.save();
      })
      .then(() => {
      	res.sendStatus(201);
      })

    }
  }

};
