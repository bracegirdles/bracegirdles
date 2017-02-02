import { Sequelize } from 'sequelize';


//Create a database with the name alumnidb
//Serve with the username of root
//No password for now !!
let db = new Sequelize('alumnidb', 'root', '');


export default db;