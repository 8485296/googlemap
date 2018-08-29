'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    let keyword = encodeURIComponent(ctx.params.key);
    let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyCFXnELZRjlL9KHLXH3p4UE52jYCgD9Tto&types=(cities)&language=zh-CN&input=${keyword}`

    let res;

    try{
      res = await ctx.curl(url, {
        method: 'GET',
        dataType: 'json',
        data: {},
        timeout: 3000,
      });
    }catch(e){

    }

    console.log('==========res', res);
    ctx.body = {
      success: true,
      msg: 'ok!',
      data: res.data,
    };
  }
}

module.exports = HomeController;
