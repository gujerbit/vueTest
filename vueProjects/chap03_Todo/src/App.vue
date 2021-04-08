<template>
  <div>
    <templateComponent/>
  </div>
</template>

<script>
import templateComponent from './components/TodoTemplate.vue';

export default {
  name: 'App',
  components: {
    templateComponent
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
