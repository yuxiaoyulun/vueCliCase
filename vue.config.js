/*
 * @Descripttion: 
 * @version: 
 * @Author: @yulun
 * @Date: 2022-10-09 21:34:36
 * @LastEditors: @yulun
 * @LastEditTime: 2023-02-07 16:47:57
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.plugin('html').tap((args)=>{
      args[0].title = "探索VueCli";
      return args;
    })
  }
})
