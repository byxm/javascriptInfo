"use strict";

const { json } = require("express");

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  const jsonp = app.jsonp();
  router.get("/", controller.home.index);
  router.get("/test", jsonp, controller.home.test);
};
