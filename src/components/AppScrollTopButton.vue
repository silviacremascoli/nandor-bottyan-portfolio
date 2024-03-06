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
import { defineComponent } from "vue";

export default defineComponent({
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
    // the scrollToTop function scrollback to the top of the page with a smooth effect, while the detectScroll function makes the button appear only after the user has scrolled down
    scrollToTop(event: Event) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    detectScroll(event: Event) {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 500) {
        this.display = true;
      } else {
        this.display = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
#scroll-top-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  z-index: 99;
  border-radius: 50%;
  background: $tertiary-color;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.2);
  }

  i {
    color: $secondary-color;
    font-size: 28px;
  }
}
</style>
