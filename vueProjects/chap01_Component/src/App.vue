<template>
  <div class="card-body">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <h1>Vue Components</h1> -->
    <!-- <temp></temp> -->
    <h1>Vue Components</h1>
    <binding></binding>
    <!-- <binding/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import temp from './components/A01.Currency.vue'
import binding from './components/02_Binding.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // temp,
    binding
  }
}
</script>

<style>
h1 {
  color: orange;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
