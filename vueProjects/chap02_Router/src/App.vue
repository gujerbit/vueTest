<template>
  <div>
    라우터 실습 | 
    <router-link to="/">INDEX</router-link> | 
    <router-link to="/home">HOME</router-link> | 
    <router-link to="/about/100/data/Nolbu">ABOUT</router-link> | 
    <router-link to="/params">PARAMS</router-link> | 
    <router-link to="/child">CHILD</router-link> | 
    <router-link to="/d">NOTFOUND</router-link> | 
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

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
