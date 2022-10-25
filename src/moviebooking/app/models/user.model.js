const User = (mongoose) => {
    //We Have to Make Schema
    const userSchema = mongoose.Schema({
        userid: Number,
        email: String,
        first_name: String,
        last_name: String,
        username: String,
        contact: String,
        password: String,
        role: String,
        isLoggedIn: Boolean,
        uuid: String,
        accesstoken: String,
        coupens: [],
        bookingRequests: {
            type: Array
        }


    }, { timestamp: true });

    const User = mongoose.model("users", userSchema);

    return User;
}

module.exports = User;