// load the db.config.js file 
const dbConfig = require('../config/db.config');


//Setup or Load mongoose
const mongoose = require("mongoose");

//Here mongoose is a variable we are passing 
const Movie = require('./movie.model')(mongoose);

const User = require('./user.model')(mongoose);

const Genre = require('./genre.model')(mongoose);

const Artist = require("./artist.model")(mongoose);

// const MovieModel = Movie(mongoose);  //one Way 

//Setup the database object
const db = {};

db.url = dbConfig.url;

db.mongoose = mongoose;

db.Movie = Movie;

db.User = User;

db.Genre = Genre;

db.Artist = Artist;



module.exports = db;