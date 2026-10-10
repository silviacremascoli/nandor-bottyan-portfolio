<template>
  <div class="article-wrapper">
    <div class="article">
      <header class="article-header">
        <h1>Modern CSS Techniques</h1>
        <p class="post-meta">Posted on September 15, 2026</p>
      </header>

      <main class="article-content">
        <p class="article-lead">
          CSS has evolved dramatically in recent years. Modern CSS features allow us to build
          complex, responsive layouts with cleaner code and better performance. In this article,
          I'll share some of my favorite modern CSS techniques that every developer should know.
        </p>

        <section class="article-section" data-aos="fade-up" data-aos-duration="1000">
          <h2>CSS Grid for Layouts</h2>
          <p>
            CSS Grid is a powerful layout system that allows you to create complex layouts with
            ease. Unlike Flexbox which is one-dimensional, Grid is two-dimensional, making it 
            perfect for page layouts.
          </p>
          <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  grid-auto-rows: minmax(100px, auto);
}</code></pre>
          <p>
            This creates a responsive grid that automatically adjusts the number of columns
            based on available space, with each column being at least 250px wide.
          </p>
        </section>

        <section class="article-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <h2>CSS Custom Properties (Variables)</h2>
          <p>
            Custom properties, also known as CSS variables, allow you to define reusable values
            that can be updated across your entire stylesheet.
          </p>
          <pre><code>:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --spacing-unit: 8px;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing-unit);
}</code></pre>
          <p>
            Variables make it easy to maintain consistent theming across your application and
            enable dynamic theming based on user preferences.
          </p>
        </section>

        <section class="article-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <h2>Flexbox for Components</h2>
          <p>
            While Grid is great for page layouts, Flexbox excels at component-level layouts.
            It's perfect for aligning items in a single dimension (either horizontally or vertically).
          </p>
          <pre><code>.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}</code></pre>
          <p>
            The gap property works with both Flexbox and Grid, eliminating the need for 
            margins on child elements.
          </p>
        </section>

        <section class="article-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          <h2>Modern Selectors and Functions</h2>
          <p>
            CSS now includes powerful selectors and functions that simplify common tasks:
          </p>
          <ul>
            <li><strong>:is() and :where():</strong> Select elements matching any of several selectors</li>
            <li><strong>clamp():</strong> Fluid typography and spacing</li>
            <li><strong>min() and max():</strong> Responsive value selection</li>
            <li><strong>aspect-ratio:</strong> Maintain element proportions</li>
          </ul>
          <pre><code>.responsive-text {
  font-size: clamp(1rem, 2vw, 1.5rem);
}

.box {
  aspect-ratio: 16 / 9;
}</code></pre>
        </section>
        <div class="back-link">
          <router-link to="/blog" class="back-to-blog">
            ← Back to Blog
          </router-link>
        </div>
      </main>
    </div>
    <AppClouds />
  </div>
</template>

<script lang="ts">
import AppClouds from "@/components/AppClouds.vue";

export default {
  name: "ArticleCssTechniques",
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
