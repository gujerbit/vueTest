<template>
  <div class="card-body">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <h1>Vue Components</h1> -->
    <!-- <temp></temp> -->
    <h1>Vue Components</h1>
    <event></event>
    <lifeCycle></lifeCycle>
    <repeater></repeater>
    <binding></binding>
    <!-- <binding/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import temp from './components/A01.Currency.vue'
import binding from './components/02_Binding.vue'
import repeater from './components/A03.Repeater.vue'
import lifeCycle from './components/A04.LifeCycle.vue'
import event from './components/A05.Event.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // temp,
    binding,
    repeater,
    lifeCycle,
    event
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
