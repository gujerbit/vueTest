<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Vue Components</h1>
    <temp></temp>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import temp from './components/A01.Currency.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    temp
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
