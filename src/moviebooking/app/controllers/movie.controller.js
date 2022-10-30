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



const findShows = (req, res) => {

    const id = req.params.id;

    Movie.find({ movieid: id })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Movie with id " + id });
            else {
                res.send(data[0].shows);//since we are getting an array after search
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Shows for movie with id=" + id });
        });
}

module.exports = { findAllMovies, findOne, findShows }