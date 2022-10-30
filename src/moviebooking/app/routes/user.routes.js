const { Router } = require("express");

module.exports = (app) => {
    const userController = require("../controllers/user.controller");

    const router = require("express").Router();
    // 1. SignUp route a new user. 

    router.post('/auth/signup', userController.signUp);

    // 2. Login Route 
    router.post("/auth/login", userController.login);

    // Logout route
    router.post("/auth/logout", userController.logout);

    app.use("/api", router);
}