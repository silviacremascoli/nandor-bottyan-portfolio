<template>
  <ParticlesBg />
  <header class="header">
    <h1>Nándor Bottyán</h1>
    <h2 class="mb-5">Blockchain and IoT Solution Architect</h2>
    <AppClouds />
    <AppScrollTopButton />
  </header>
</template>

<script lang="ts">
import ParticlesBg from "./ParticlesBg.vue";
import AppScrollTopButton from "./AppScrollTopButton.vue";
import AppClouds from "./AppClouds.vue";

export default {
  name: "AppHero",
  components: {
    ParticlesBg,
    AppClouds,
    AppScrollTopButton,
  },
};
</script>
<style scoped>
.header {
  padding-top: 100px;
}
h1 {
  margin-bottom: 20px;
  font-size: 72px;
  font-family: var(--heading-font);
}

h2 {
  font-size: 42px;
  font-weight: 500;
}
.clouds {
  fill: var(--tertiary-color);
}
</style>
