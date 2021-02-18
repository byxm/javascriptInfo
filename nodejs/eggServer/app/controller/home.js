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

  async ajax() {
    const params = this.ctx.request.query
    this.ctx.body = { name: params.name }; 
  }

  async sleep(seconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, seconds * 1000)
    })
  }

  async promise() {
    console.log('time', Date.now());
    const params = this.ctx.request.query
    // console.log('hahahahah')
    await this.sleep(10)
    this.ctx.body = { name: params.name }; 
  }

}

module.exports = HomeController;
