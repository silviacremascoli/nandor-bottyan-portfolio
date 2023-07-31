<template>
  <div id="app">
    <AppNav />
    <AppScrollTopButton />
    <AppHero />
    <AppSkills />
    <AppAbout />
    <AppProjects />
    <AppContact />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import AppNav from "./components/AppNav.vue";
import AppScrollTopButton from "./components/AppScrollTopButton.vue";
import AppHero from "./components/AppHero.vue";
import AppSkills from "./components/AppSkills.vue";
import AppAbout from "./components/AppAbout.vue";
import AppProjects from "./components/AppProjects.vue";
import AppContact from "./components/AppContact.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNav,
    AppScrollTopButton,
    AppHero,
    AppSkills,
    AppAbout,
    AppProjects,
    AppContact,
    AppFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Tektur:wght@400;500;600;700;800;900&display=swap");

:root {
  --primary-color: #24263b;
  --secondary-color: #1f2235;
  --tertiary-color: #ff4a57;
  --main-font: "Poppins", sans-serif;
  --heading-font: "Tektur", cursive;
}

html {
  margin: 0 !important;
  padding: 0 !important;
}

body {
  font-family: var(--main-font);
  background: var(--primary-color);
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: white;
  max-width: 100%;
  max-height: 100%;
  margin: 0 !important;
  padding: 0 !important;
}
</style>
