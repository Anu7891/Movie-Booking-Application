const User = (mongoose) => {
    //We Have to Make Schema
    const userSchema = mongoose.Schema({
        userid: Number,
        email: {
            type: String,
            required: true,
            unique: true
        },
        first_name: String,
        last_name: String,
        username: {
            type: String,
            required: true,
            unique: true
        },
        contact: String,
        password: {
            type: String,
            required: true,
            unique: true
        },
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