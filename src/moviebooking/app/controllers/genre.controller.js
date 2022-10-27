const { Genre } = require("../models")

const findAllGenres = (req, res) => {
    if (req.query.status === undefined) {
        Genre.find().then((data) => {
            res.status(200).json({ success: true, genreData: data });
        }).catch((err) => {
            res.status(500).json({ success: false, msg: err })
        })
    }
}

module.exports = { findAllGenres };