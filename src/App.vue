<template>
  <div id="app">
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <AppNav />
    <AppScrollTopButton />
    <main id="main-content" class="main-content" tabindex="-1">
      <router-view></router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { watch, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppNav from "./components/AppNav.vue";
import AppScrollTopButton from "./components/AppScrollTopButton.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNav,
    AppScrollTopButton,
    AppFooter,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    watch(
      () => route.hash,
      async (newHash) => {
        await nextTick();
        await nextTick();
        if (newHash) {
          const element = document.querySelector(newHash);
          if (element) {
            requestAnimationFrame(() => {
              element.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                block: "start",
              });
      });
          }
        }
      },
      { immediate: true }
    );

    return {};
  },
};
</script>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
}

#app {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

section {
  // match the scroll-margin-top to the height of the fixed navbar
  scroll-margin-top: 90px;

  @include media-breakpoint-down(lg) {
    // add margin to account for the fixed navbar height on smaller screens
    scroll-margin-top: 400px;
  }
}

.main-content {
  flex: 1 0 auto;
}

.skip-link {
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  padding: pxToRem(12) pxToRem(16);
  color: $secondary-color;
  background: $white;
  transform: translateY(-150%);

  &:focus {
    transform: translateY(0);
  }
}

:focus-visible {
  outline: 3px solid $white;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  [data-aos] {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
