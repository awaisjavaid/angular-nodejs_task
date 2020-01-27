function userRoutes() {
    const express = require("express");
    const userRoutes = express.Router();
    const userDetailController = require("../controllers/userDetailController");
    userRoutes.post("/login", (req, res) => {
        userDetailController(req).login(res);
    });
    return userRoutes;
}

module.exports = userRoutes();