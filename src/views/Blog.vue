<template>
  <AppNav />
  <AppFooter />
</template>

<script lang="ts">
import AppNav from "./components/AppNav.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "Blog",
  components: {
    AppNav,
    AppFooter,
  },
};
</script>

<style></style>
