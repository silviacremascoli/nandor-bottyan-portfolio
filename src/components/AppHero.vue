<template>
  <ParticlesBg />
  <header class="header">
    <h1>Nándor Bottyán</h1>
    <button
      v-on:click.prevent="scrollToTop"
      id="scroll-top-button"
      ref="scrollTopButton"
    >
      <i class="fa-solid fa-arrow-up"></i>
    </button>
    <h2 class="mb-5">Blockchain and IoT Solution Architect</h2>
    <AppClouds />
  </header>
</template>

<script lang="ts">
import ParticlesBg from "./ParticlesBg.vue";
import AppClouds from "./AppClouds.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHero",
  components: {
    ParticlesBg,
    AppClouds,
  },
  // created() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },
  // unmounted() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
  methods: {
    scrollToTop(event: Event) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    // handleScroll(event: Event) {
    //   if (window.scrollY > 20) {
    //     alert("Hello!");
    //   }
    // },
  },
});
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
