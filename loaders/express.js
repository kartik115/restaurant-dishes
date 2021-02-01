const conf = require("../config/" + process.env.NODE_ENV + ".js");
// const logger = require("morgan");
const bodyParser = require('body-parser');
const express = require("express");

module.exports.init = (app) => {
    const routerV1 = express.Router();
    const routerV2 = express.Router();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(require("morgan")('dev'))

    app.use("/dishes/api/v1", routerV1);
    app.use("/dishes/api/v2", routerV2);

    app.set("routerV1", routerV1);
    app.set("routerV2", routerV2);
    return app;
}
