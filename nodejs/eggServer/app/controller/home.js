"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }

  async test() {
    const { ctx } = this;
    const { wd, callback } = ctx.request.query;
    console.log(wd); // Iloveyou
    console.log(callback); // show
    ctx.body =`${callback}('我不爱你')`;
  }
}

module.exports = HomeController;
