<template>
  <div id="app">
    <AppHeader />
    <AppHero />
    <AppSkills />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AppHero from "./components/AppHero.vue";
import AppHeader from "./components/AppHeader.vue";
import AppSkills from "./components/AppSkills.vue";
import AppFooter from "./components/AppFooter.vue";

@Options({
  components: {
    AppHeader,
    AppHero,
    AppSkills,
    AppFooter,
  },
})
export default class App extends Vue {}
</script>

<style>
:root {
  --primary-color: #24263b;
  --secondary-color: #1f2235;
  --default-font: Helvetica, Arial, sans-serif;
}
body {
  font-family: var(--default-font);
  background: var(--primary-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
