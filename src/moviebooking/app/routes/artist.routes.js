const { Router } = require("express");

module.exports = (app) => {

    const artistController = require("../controllers/artist.controller");

    const router = require("express").Router();

    router.get("/", artistController.findAllArtists);

    app.use("/api/artists", router)
};