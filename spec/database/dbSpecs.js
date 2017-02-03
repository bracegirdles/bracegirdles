import { Sequelize } from 'sequelize';
import { mysql } from 'mysql';
import { expect } from ('chai').expect;
import User from '../db/models/userModel.js';
import Post from '../db/models/postModel.js';


//The connection here is simply a mock to test our models
//Alternatively we can import the actual connection from '../db/db.js'
let connection = new Sequelize('mydatabase', 'myUsername', 'myPassword');

describe('User', () => {
  it('Should have a name, status, email, cohort, and github fields', () => {
    let user = connection.define('user', User);
    connection.sync().then(() => {
      user.create({
        name: 'Person',
		email: 'person@gmail.com',
		status: 'alumni',
		cohort: 'hr52',
		github: 'github.com/person'	
      }).then((savedUser) => {
          expect(savedUser.name).to.equal('Person');
		  expect(savedUser.email).to.equal('person@gmail.com');
		  expect(savedUser.status).to.equal('alumni');
		  expect(savedUser.cohort).to.equal('hr52');	
		  expect(savedUser.github).to.equal('github.com/person');
      });
    });	
  });
});


describe('Post', () => {
  it('Should have a title and content fields', () => {
    let message = connection.define('message', Post);
    connection.sync().then(() => {
      message.create({
        title: 'what is the name of our group',
        content: 'And what is the name of the project'	
      }).then((posted) => {
      	  expect(posted.title).to.equal('what is the name of our group');
      	  expect(posted.content).to.equal('And what is the name of the project');
      });	
    });
  });
});

//Add more tests here