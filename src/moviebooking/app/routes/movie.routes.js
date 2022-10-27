const { Router } = require("express");

//App here is Express object
module.exports = (app) => {

    const movieController = require("../controllers/movie.controller");

    //Now we have to import the router //Router() gives us a router object
    const router = require("express").Router();

    router.get("/", movieController.findAllMovies);
    router.get("/:id", movieController.findOne);
    router.get("/:id/shows", movieController.findShows);

    app.use("/api/movies", router);

};