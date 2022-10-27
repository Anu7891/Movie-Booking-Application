const { Artist } = require("../models")



const findAllArtists = (req, res) => {
    if (req.query.status === undefined) {
        Artist.find().then((data) => {
            res.status(200).json({ success: true, artistData: data })
        }).catch((err) => {
            res.status(500).json({ success: false, msg: err })
        })
    }

}

module.exports = { findAllArtists };