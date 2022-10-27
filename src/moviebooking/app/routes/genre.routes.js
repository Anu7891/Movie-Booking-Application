const { Router } = require("express");

module.exports = (app) => {

    const genreController = require('../controllers/genre.controller');

    const router = require("express").Router();

    router.get("/", genreController.findAllGenres);

    app.use("/api/genres", router)
};