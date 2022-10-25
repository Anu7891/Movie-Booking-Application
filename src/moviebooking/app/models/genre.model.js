const Genre = (mongoose) => {

    const genreSchema = mongoose.Schema({
        genreid: Number,
        genre: String
    }, { timestamp: true });

    const Genre = mongoose.model("genres", genreSchema);

    return Genre;

}

module.exports = Genre;