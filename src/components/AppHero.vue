<template>
  <ParticlesBg />
  <div class="header">
    <h1>Nándor Bottyán</h1>
    <button v-on:click.prevent="scrollToTop" id="scroll-top-button">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
    <h2 class="mb-5">Blockchain and IoT Solution Architect</h2>
    <AppClouds />
  </div>
</template>

<script lang="ts">
import ParticlesBg from "./ParticlesBg.vue";
import AppClouds from "./AppClouds.vue";

export default {
  name: "AppHero",
  components: {
    ParticlesBg,
    AppClouds,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
};
</script>
<style scoped>
.header {
  padding-top: 100px;
}
h1 {
  margin-bottom: 20px;
  font-size: 64px;
}

#scroll-top-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  z-index: 99;
  border-radius: 50%;
  background: var(--tertiary-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  transition: transform 0.5s;
}

#scroll-top-button i {
  color: var(--secondary-color);
  font-size: 28px;
}

#scroll-top-button:hover {
  transform: scale(1.2);
}

h2 {
  font-size: 42px;
  font-weight: 500;
}
.clouds {
  fill: var(--tertiary-color);
}
</style>
