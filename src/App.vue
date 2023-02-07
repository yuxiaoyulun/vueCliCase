<!--
 * @Descripttion: 
 * @version: 
 * @Author: @yulun
 * @Date: 2022-10-09 21:34:36
 * @LastEditors: @yulun
 * @LastEditTime: 2023-02-07 17:14:05
-->
<template>
  <div>{{env}}</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      env:process.env.BASE_URL
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
