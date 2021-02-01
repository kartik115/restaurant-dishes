const conf = require("../config/" + process.env.NODE_ENV + ".js");
const dbConn = require("./mongoose");
const express = require("./express");

module.exports.init = async (app) => {
    await express.init(app);
    dbConn.init();
}