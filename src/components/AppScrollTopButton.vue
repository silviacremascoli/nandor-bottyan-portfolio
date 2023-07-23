<template>
  <button
    v-on:click.prevent="scrollToTop"
    id="scroll-top-button"
    :style="{ display: display ? 'block' : 'none' }"
  >
    <i class="fa-regular fa-hand-point-up"></i>
  </button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      display: false as boolean,
      scrollPosition: 0 as number,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.detectScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.detectScroll);
  },
  methods: {
    scrollToTop(event: Event): any {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    detectScroll(event: Event): any {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 500) {
        this.display = true;
      } else {
        this.display = false;
      }
    },
  },
};
</script>

<style scoped>
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
</style>
