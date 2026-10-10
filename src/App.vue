<template>
  <div id="app">
    <AppNav />
    <AppScrollTopButton />
    <main class="main-content">
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
                behavior: "smooth",
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
</style>
