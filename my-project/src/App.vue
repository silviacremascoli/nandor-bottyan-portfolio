<template>
  <div id="app">
    <AppNav />
    <AppHero />
    <AppSkills />
    <AppAbout />
    <AppProjects />
    <AppContact />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AppNav from "./components/AppNav.vue";
import AppHero from "./components/AppHero.vue";
import AppSkills from "./components/AppSkills.vue";
import AppAbout from "./components/AppAbout.vue";
import AppProjects from "./components/AppProjects.vue";
import AppContact from "./components/AppContact.vue";
import AppFooter from "./components/AppFooter.vue";

@Options({
  components: {
    AppNav,
    AppHero,
    AppSkills,
    AppAbout,
    AppProjects,
    AppContact,
    AppFooter,
  },
})
export default class App extends Vue {}
</script>

<style>
:root {
  --primary-color: #24263b;
  --secondary-color: #1f2235;
  --tertiary-color: #ff4a57;
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
