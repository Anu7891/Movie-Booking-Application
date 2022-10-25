const dbConfig = require('../config/db.config');

const mongoose = require("mongoose");

const Movie = require('./movie.model')(mongoose);

const User = require('./user.model')(mongoose);

const Genre = require('./genre.model')(mongoose);

const Artist = require("./artist.model")(mongoose);

// const MovieModel = Movie(mongoose);  //one Way 

const db = {};

db.url = dbConfig.url;

db.mongoose = mongoose;

db.Movie = Movie;

db.User = User;

db.Genre = Genre;

db.Artist = Artist;



module.exports = db;