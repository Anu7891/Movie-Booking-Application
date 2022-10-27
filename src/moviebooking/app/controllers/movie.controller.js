const { Movie } = require("../models");

const findAllMovies = (req, res) => {
    if (req.query.status === undefined) {
        Movie.find()
            .then(data => {
                res.status(200).json({ success: true, movieData: data })
            }).catch((err) => {
                res.status(500).json({ success: false, msg: err })
            });
    }
    else {
        let status = req.query.status;
        let conditionsToCheck = null;
        if (status === "PUBLISHED") {
            conditionsToCheck = {};
            conditionsToCheck.published = true;
        }
        else if (status === "RELEASED") {
            conditionsToCheck = {};
            conditionsToCheck.released = true;

            if (req.query.title !== undefined) {
                conditionsToCheck.title = req.query.title;
            }
            if (req.query.artists !== undefined) {
                conditionsToCheck.artists = req.query.artists;
            }
            if (req.query.genres !== undefined) {
                conditionsToCheck.genres = req.query.genres;
            }
        }
        if (conditionsToCheck !== null) {
            Movie.find(conditionsToCheck).then(data => {
                res.status(200).json({ success: true, movieData: data })
            }).catch((err) => {
                res.status(500).json({ success: false, msg: err })
            })
        }
    }

};


const findOne = async (req, res) => {
    const movieid = req.params.id;
    const movie = await Movie.findOne({ movieid });
    if (movie) {
        res.status(200).json({ success: true, movie });
    }
    else {
        res.status(404).json({ success: false, msg: "Id Doesn't match any Movie" })
    }

};


const findShows = async (req, res) => {
    const movieid = req.params.id;
    const movie = await Movie.findOne({ movieid });
    if (movie) {
        res.status(200).json({ success: true, shows: movie.shows });
    }
    else {
        res.status(404).json({ success: false, msg: "Id Doesn't match any Movie" })
    }
}

module.exports = { findAllMovies, findOne, findShows }