<template>
  <button
    v-show="display"
    @click="scrollToTop"
    id="scroll-top-button"
  >
    <i class="fa-regular fa-hand-point-up"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppScrollTopButton",
  data() {
    return {
      display: false as boolean,
    };
  },
  mounted() {
    // use capture to catch scroll events from ANY scrolling container on the page
    window.addEventListener("scroll", this.detectScroll, { passive: true, capture: true });
    this.detectScroll();
  },
  unmounted() {
    window.removeEventListener("scroll", this.detectScroll, { capture: true });
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      document.body.scrollTo({ top: 0, behavior: "smooth" });
    },
    detectScroll(event?: Event) {
      let scrollPos = 0;

      // check if the scroll event originated from a specific inner container element
      if (event && event.target && event.target !== document && event.target !== window) {
        scrollPos = (event.target as HTMLElement).scrollTop || 0;
      } else {
        scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      }

      this.display = scrollPos > 500;
    }
  },
});
</script>

<style lang="scss" scoped>
#scroll-top-button {
  $size: pxToRem(50);

  position: fixed;
  right: pxToRem(20);
  bottom: pxToRem(20);
  width: $size;
  height: $size;
  z-index: 99;
  border-radius: $round-border-radius;
  background: $tertiary-color;
  box-shadow: 0 0 pxToRem(10) rgba(0, 0, 0, 0.5);
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
    font-size: pxToRem(28);
  }
}
</style>
