const conf = require("./config/" + process.env.NODE_ENV + ".js")

const loaders = require('./loaders');
const express = require('express');
const routes = require('./app/routes');

async function startServer() {

  const app = express();
  await loaders.init(app);
  app.listen(conf.port, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your server is ready !`);
  });
  routes.init(app);
}


startServer();