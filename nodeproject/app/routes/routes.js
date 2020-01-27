function routes() {
    const express = require('express');
    const router = express.Router();
    const userRoutes = require("../routes/userRoutes");
    router.use("/api/v1/user", userRoutes);
    return router;
}
module.exports = routes();