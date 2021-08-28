<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { modifyCSSRule } from "change-css";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    modifyCSSRule('#app', {
      color: 'rgb(128, 128, 128)',
      fontFamily: 'Helvetica',
      backgroundColor: 'rgb(230, 230, 230)'
    });
  },
};
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
