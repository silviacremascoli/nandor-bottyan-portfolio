<template>
  <nav class="navbar navbar-expand-lg sticky-top" aria-label="Main navigation">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/" @click="navigateTo('/', $event)">
        <img src="../assets/john-smith-logo.png" alt="John Smith logo" class="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto nav-underline">
          <router-link class="nav-link home-link" to="/" @click="navigateTo('/', $event)">Home</router-link>
          <router-link class="nav-link" :to="{ path: '/', hash: '#skills' }" @click="navigateTo({ path: '/', hash: '#skills' }, $event)">Expertise</router-link>
          <router-link class="nav-link" :to="{ path: '/', hash: '#about-me' }" @click="navigateTo({ path: '/', hash: '#about-me' }, $event)">About me</router-link>
          <router-link class="nav-link" to="/blog" @click="navigateTo('/blog', $event)">Blog</router-link>
          <router-link class="nav-link" :to="{ path: '/', hash: '#projects' }" @click="navigateTo({ path: '/', hash: '#projects' }, $event)">My Projects</router-link>
          <router-link class="nav-link contact" :to="{ path: '/', hash: '#contact' }" @click="navigateTo({ path: '/', hash: '#contact' }, $event)">Contact me</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as bootstrap from 'bootstrap';
import { RouteLocationRaw } from 'vue-router';

export default defineComponent({
  name: "AppNav",
  methods: {
    navigateTo(to: RouteLocationRaw, event: MouseEvent) {
      const navbarCollapse = document.getElementById('navbarNavAltMarkup');
      
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        event.preventDefault(); 
        
        // trigger Bootstrap collapse to close the navbar when a link is clicked
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
        
        this.$router.push(to);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
nav {
  background: $secondary-color;
  max-width: 100%;
  flex-grow: 0;
  flex-shrink: 0;

  &.navbar {
    padding: 4px 20px;

    @include media-breakpoint-up(sm) {
      padding: 5px 50px;
    }
  }
  .nav-link {
    color: $tertiary-color;
    font-size: 18px;
    letter-spacing: 1.5px;
    text-align: left;
    padding-bottom: 2px;

    &:hover {
      color: $tertiary-color;
      transition: all 400ms ease-in-out;

      @include media-breakpoint-up(lg) {
        transform: scale(1.05);
      }
    }

    &:focus, &:active {
      color: $tertiary-color;
    }

    &.home-link {
      @include media-breakpoint-down(sm) {
        padding-top: 20px;
      }
    }

    &.contact {
      @include media-breakpoint-down(lg) {
        margin-bottom: 20px;
      }
    }
  }

  .navbar-toggler {
    background: $tertiary-color;

  }
  .logo {
    max-width: 60px;
  }
}
</style>
