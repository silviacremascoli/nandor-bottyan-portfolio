<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

@Options({
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
})
export default class App extends Vue {}
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
