<template>
  <div class="blog-wrapper">
    <div class="blog">
      <header class="blog-header">
        <h1>My Blog</h1>
        <p class="subtitle">Thoughts, ideas, and insights</p>
      </header>

      <main class="blog-content">
        <article class="blog-post" data-aos="fade-up" data-aos-duration="1000">
          <h2>Getting Started with Vue 3</h2>
          <p class="post-meta">Posted on October 1, 2026</p>
          <p>
            Vue 3 brings significant improvements over Vue 2, including the Composition API,
            better TypeScript support, and improved performance. In this article, I'll walk
            you through setting up your first Vue 3 project.
          </p>
          <router-link to="/blog/vue-3-guide" class="read-more">Read more →</router-link>
        </article>

        <article class="blog-post" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <h2>Modern CSS Techniques</h2>
          <p class="post-meta">Posted on September 15, 2026</p>
          <p>
            CSS has evolved significantly in recent years. With features like CSS Grid, Flexbox,
            and custom properties, we can build complex layouts with much less code. Let me show
            you some of my favorite modern CSS techniques.
          </p>
          <router-link to="/blog/css-techniques" class="read-more">Read more →</router-link>
        </article>

        <article class="blog-post" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <h2>The Future of Web Development</h2>
          <p class="post-meta">Posted on August 28, 2026</p>
          <p>
            Web development is constantly evolving. In this post, I share my thoughts on where
            the industry is heading, including trends like WebAssembly, edge computing, and
            AI-powered development tools.
          </p>
          <router-link to="/blog/web-future" class="read-more">Read more →</router-link>
        </article>
      </main>
    </div>
    <AppClouds />
  </div>
</template>

<script lang="ts">
import AppClouds from "@/components/AppClouds.vue";

export default {
  name: "Blog",
  components: {
    AppClouds,
  },
};
</script>

<style lang="scss" scoped>
@use "sass:color";

.blog-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: $secondary-color;
}

.clouds {
  fill: $tertiary-color;
  max-width: 100%;
  margin-bottom: 0;
}

.blog {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @include media-breakpoint-up(md) {
    padding: 60px 40px;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 60px;

    h1 {
      font-size: 2.5rem;
      font-family: $heading-font;
      font-weight: $bold;
      color: $tertiary-color;
      margin-bottom: 15px;

      @include media-breakpoint-up(md) {
        font-size: 3rem;
      }
    }

    .subtitle {
      font-size: 1.2rem;
      color: rgba($tertiary-color, 0.7);
    }
  }

  .blog-content {
    display: grid;
    gap: 40px;
  }

  .blog-post {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 1.75rem;
      font-family: $heading-font;
      font-weight: $bold;
      color: $tertiary-color;
      margin-bottom: 10px;
    }

    .post-meta {
      color: rgba($tertiary-color, 0.6);
      font-size: 0.9rem;
      margin-bottom: 15px;
      font-style: italic;
    }

    p {
      color: rgba($tertiary-color, 0.8);
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .read-more {
      color: $tertiary-color;
      text-decoration: none;
      font-weight: 500;
      display: inline-block;
      transition: all 0.3s ease;

      &:hover {
        color: color.adjust($tertiary-color, $lightness: 20%);
        transform: translateX(5px);
      }
    }
  }
}
</style>
