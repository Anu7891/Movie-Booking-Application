const { User } = require("../models");
const TokenGenerator = require('uuid-token-generator');
const { fromString } = require('uuidv4');
const { atob, btoa } = require("b2a");

//Login 
const login = (req, res) => {
    //Since the authorization header has a value in the format of Bearer [JWT_TOKEN], we have split the value by the space and separated the token.
    const authHeader = req.headers.authorization.split(" ")[1];
    let unamePwd = atob(authHeader);
    const uname = unamePwd.split(":")[0];
    const pwd = unamePwd.split(":")[1];

    //Validate Request 
    if (!uname && !pwd) {
        res.status(400).send({ message: "Please provide username and password to continue" })
        return;
    }

    const filter = { username: uname };

    User.find(filter, (err, usersFound) => {
        let user = usersFound[0]; //get the first element from single size array 
        if (err || user === null) {
            res.status(500).send({
                message: "User Not Found"
            })
        }
        else {

            if (pwd === user.password) {
                const tokgen = new TokenGenerator(); // Default is a 128-bit token encoded in base58 
                const accessTokenGenerated = tokgen.generate();
                const uuidGenerated = fromString(uname);
                user.isLoggedIn = true;
                user.uuid = uuidGenerated;
                user.accesstoken = accessTokenGenerated;
                User.findOneAndUpdate(filter, user, { useFindAndModify: false })
                    .then((data) => {
                        if (!data) {
                            res.status(404).send({
                                message: "Some error occurred, please try again later"
                            })
                        } else {
                            //we are collecting this in react side as xhrLogin.getResponseHeader("access-token")
                            res.header('access-token', user.accesstoken)
                            //we are collecting this in react side as JSON.parse(this.responseText).id  
                            res.send({ "id": user.uuid, "access-token": user.accesstoken });
                        }
                    })
                    .catch(err => {
                        res.status(500).send({ message: "Error updating" })
                    });
            } else {
                res.status(500).send({
                    message: "Please enter valid password"
                });
            }
        }
    });

}

//SignUp Api
const signUp = (req, res) => {

    if (!req.body.email_address && !req.body.password) {
        res.status(400).send({ message: "Please provide email and password to continue." });
        return;
    }

    //Create a User 

    const user = new User({
        email: req.body.email_address,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.first_name + req.body.last_name,
        password: req.body.password,
        contact: req.body.mobile_number,
        role: req.body.role ? req.body.role : 'user',
        isLoggedIn: false,
        uuid: "",
        accesstoken: "",
        coupens: [],
        bookingRequests: []
    });

    //Save the user in database 
    user.save(user).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({ message: err.message || "Some error occurred, please try again later" });
        });
};


const logout = (req, res) => {
    if (!req.body.uuid) {
        res.status(400).send({ message: "ID Not Found!" });
        return;
    }

    const update = { isLoggedIn: false, uuid: "", accesstoken: "" };

    User.findOneAndUpdate({ "uuid": req.body.uuid }, update)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: "Some error occurred, please try again later."
                });
            } else res.send({ message: "Logged Out successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating."
            });
        });

}

module.exports = { login, signUp, logout };

