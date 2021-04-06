<template>
  <div class="card-body">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <h1>Vue Components</h1> -->
    <!-- <temp></temp> -->
    <h1>Vue Components</h1>
    <formComponent />
    <styleClass></styleClass>
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
import binding from './components/02_Binding.vue';
import repeater from './components/A03.Repeater.vue';
import lifeCycle from './components/A04.LifeCycle.vue';
import event from './components/A05.Event.vue';
import styleClass from './components/A06.StyleClass.vue';
import formComponent from './components/A07.Form.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // temp,
    binding,
    repeater,
    lifeCycle,
    event,
    styleClass,
    formComponent
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
