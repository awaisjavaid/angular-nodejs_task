const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require('./routes/routes');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-control-allow-origin", "*");
    res.header("Access-control-allow-headers", "Authorization, content-type");
    if (req.method === "OPTIONS") {
        res.header("Access-control-allow-methods", "GET, PUT, POST, DELETE");
        res.end();
        return;
    }
    next();
});
app.use(routes);
app.use(function (req, res, next) {
    const error = new Error("Route Not Found");
    error.status = 400;
    next(error);
});
app.use(function (error, req, res, next) {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });

});
module.exports = app;