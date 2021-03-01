"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // const res = await this.sleep(10)
    const startRequest = async () => {
      const rew = await this.blockTask();
      console.log("rew", rew);
      const rs = await this.blockTask();
      console.log("rs", rs);
    };

    startRequest();

    console.log("reshahahah");
    ctx.body = "hi, egg";
    console.log('request End')
  }

  async blockTask() {
    for (let i = 0; i < 1e10; i++) {}
  }

  async sleep(second) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("done");
      }, second * 1000);
      // for (let i = 0; i < 1e10; i++) {}
    });
  }

  async test() {
    const { ctx } = this;
    const { wd, callback } = ctx.request.query;
    console.log(wd); // Iloveyou
    console.log(callback); // show
    ctx.body = `${callback}('我不爱你')`;
  }

  async ajax() {
    const params = this.ctx.request.query;
    this.ctx.body = { name: params.name };
  }

  // async sleep(seconds) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, seconds * 1000);
  //   });
  // }

  async promise() {
    console.log("time", Date.now());
    const params = this.ctx.request.query;
    // console.log('hahahahah')
    await this.sleep(10);
    this.ctx.body = { name: params.name };
  }
}

module.exports = HomeController;
