<template>
  <div class="article-wrapper">
    <div class="article">
      <header class="article-header">
        <h1>Getting Started with Vue 3</h1>
        <p class="post-meta">Posted on October 1, 2026</p>
      </header>

      <main class="article-content">
        <p class="article-lead">
          Vue 3 represents a significant evolution from Vue 2, bringing the Composition API,
          improved TypeScript support, and performance optimizations. Whether you're new to
          Vue or migrating from Vue 2, this guide will help you get started.
        </p>

        <section class="article-section" data-aos="fade-up" data-aos-duration="1000">
          <h2>Setting Up Your First Vue 3 Project</h2>
          <p>
            The easiest way to start a new Vue 3 project is using the official create-vue
            tool or Vite. Run the following command in your terminal:
          </p>
          <pre><code>npm create vue@latest</code></pre>
          <p>
            This will prompt you to configure your project. Select the features you need
            (TypeScript, JSX, Vue Router, Pinia, etc.) and you're ready to go.
          </p>
        </section>

        <section class="article-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <h2>The Composition API</h2>
          <p>
            One of the most exciting features in Vue 3 is the Composition API. Unlike the Options
            API in Vue 2, which organizes code by options (data, methods, computed, etc.), the
            Composition API organizes code by logical concerns.
          </p>
          <p>
            Here's a simple example comparing both approaches:
          </p>
          <pre><code>
// Options API (Vue 2)
  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      increment() {
        this.count++
      }
    }
  }

  // Composition API (Vue 3)
  import { ref } from 'vue'

  export default {
    setup() {
      const count = ref(0)
      const increment = () => count.value++
      
      return { count, increment }
    }
  }
            </code>
          </pre>    
        </section>

        <section class="article-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <h2>Key Improvements in Vue 3</h2>
          <ul>
            <li><strong>Performance:</strong> Vue 3 is faster with a new reactivity system based on ES6 Proxies</li>
            <li><strong>TypeScript Support:</strong> Better TypeScript integration with improved type inference</li>
            <li><strong>Fragments:</strong> Support for multiple root nodes in components</li>
            <li><strong>Teleport:</strong> Render a component's content in a different part of the DOM</li>
            <li><strong>Suspense:</strong> Built-in support for async components</li>
          </ul>
        </section>

        <section class="article-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          <h2>Migration Tips</h2>
          <p>
            If you're migrating from Vue 2, the official <a href="https://v3-migration.vuejs.org/" target="_blank" rel="noopener">Migration Guide</a> 
            is an excellent resource. Most Vue 2 code will work in Vue 3, but some breaking changes 
            require attention, especially around the reactivity system and lifecycle hooks.
          </p>
        </section>
      </main>
      <div class="back-link">
        <router-link to="/blog" class="back-to-blog">
          ← Back to Blog
        </router-link>
      </div>
    </div>
    <AppClouds />
  </div>
</template>

<script lang="ts">
import AppClouds from "@/components/AppClouds.vue";

export default {
  name: "ArticleVue3Guide",
  components: {
    AppClouds,
  },
};
</script>

<style lang="scss" scoped>
@use "sass:color";

.article-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: $secondary-color;

  .clouds {
    fill: $tertiary-color;
    max-width: 100%;
    margin-bottom: 0;
  }
}

.article {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;

  @include media-breakpoint-up(md) {
    padding: 60px 40px;
  }

  .article-header {
    text-align: center;
    margin-bottom: 40px;

    h1 {
      font-size: 2rem;
      font-family: $heading-font;
      font-weight: $bold;
      color: $tertiary-color;
      margin-bottom: 10px;

      @include media-breakpoint-up(md) {
        font-size: 2.5rem;
      }
    }

    .post-meta {
      color: rgba($tertiary-color, 0.6);
      font-size: 0.9rem;
      font-style: italic;
    }
  }

  .article-content {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 40px;
  }

  .article-lead {
    text-align: center;
    font-size: 1.2rem;
    color: rgba($tertiary-color, 0.8);
    line-height: 1.7;
  }

  .article-section {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 8px;
    padding: 30px;

    h2 {
      font-size: 1.5rem;
      font-family: $heading-font;
      font-weight: $bold;
      color: $tertiary-color;
      margin-bottom: 20px;
      border-bottom: 2px solid rgba($tertiary-color, 0.2);
      padding-bottom: 10px;
    }

    p {
      color: rgba($tertiary-color, 0.8);
      line-height: 1.8;
      margin-bottom: 15px;
    }

    ul {
      color: rgba($tertiary-color, 0.8);
      line-height: 1.8;
      margin-bottom: 15px;
      padding-left: 20px;

      li {
        margin-bottom: 10px;
        text-align: left;
      }

      strong {
        color: $tertiary-color;
      }
    }

    pre {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
      padding: 20px;
      overflow-x: auto;
      margin: 20px 0;

      code {
        color: #e0e0e0;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        line-height: 1.6;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
    }

    a {
      color: color.adjust($tertiary-color, $lightness: 20%);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .back-link {
    text-align: center;
    margin: 40px 0;

    .back-to-blog {
      color: rgba($tertiary-color, 0.8);
      text-decoration: none;
      font-size: 1rem;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;

      &:hover {
        color: $tertiary-color;
        gap: 12px;
      }
    }
  }
}
</style>
