<template>
  <section class="contact-section" id="contact">
    <h2 class="mt-4">Contact me</h2>
    <p class="contact-text">
      If you would like to collaborate with me or you simply want to chat,<br />
      I'm looking forward to our encounter!
    </p>
    <hr />
    <div class="row contact-options">
      <div
        class="col-lg-4 contact-option"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-easing="ease-in"
      >
        <div class="d-flex flex-column justify-content-center align-items-center">
          <i class="fa-solid fa-envelope mb-3" aria-hidden="true"></i>
          <p>Email me:</p>
          <a href="mailto:johnsmith@gmail.com" class="fw-semibold"
            >johnsmith@gmail.com</a
          >
        </div>
      </div>
      <div
        class="col-lg-4 contact-option"
        data-aos="zoom-in"
        data-aos-duration="3000"
        data-aos-easing="ease-in"
      >
        <div class="d-flex flex-column justify-content-center align-items-center">
          <i class="fa-solid fa-phone mb-3" aria-hidden="true"></i>
          <p>Call me:</p>
          <p class="fw-semibold">+1234567890</p>
        </div>
      </div>
      <div
        class="col-lg-4 contact-option"
        data-aos="zoom-in"
        data-aos-duration="3500"
        data-aos-easing="ease-in"
      >
        <div class="d-flex flex-column justify-content-center align-items-center">
          <i class="fa-brands fa-linkedin mb-3" aria-hidden="true"></i>
          <p>Find me on LinkedIn:</p>
          <a
            href="https://www.linkedin.com/in/john-smith/"
            target="_blank"
            rel="noopener noreferrer"
            class="fw-semibold"
            >/john-smith</a
          >
        </div>
      </div>
    </div>
    <div class="row form">
      <div
        class="col-lg-12 mt-4 contact-form"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-easing="ease-in"
      >
        <h3 class="mb-5 text-center">Or write me a message here:</h3>
        <form method="POST" name="contact" netlify @submit.prevent="sent">
          <div class="row g-3">
            <div class="col-lg">
              <label class="form-label" for="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                class="form-control"
                autocomplete="given-name"
              />
            </div>
            <div class="col-lg">
              <label class="form-label" for="contact-surname">Surname</label>
              <input
                id="contact-surname"
                name="surname"
                type="text"
                class="form-control"
                autocomplete="family-name"
              />
            </div>
            <div class="col-lg-7">
              <label class="form-label" for="contact-email">Email address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                class="form-control"
                autocomplete="email"
              />
            </div>
          </div>
          <div class="form-group mb-4">
            <label class="form-label mt-4" for="your-message">Your message</label>
            <textarea
              class="form-control"
              id="your-message"
              rows="8"
              name="message"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-main">
            Send!
          </button>
          <p v-if="submitted" class="mt-3" role="status">Thank you! I'll answer you as soon as possible!</p>
        </form>
      </div>
    </div>
    <AppClouds />
  </section>
</template>
<script lang="ts">
import AppClouds from "./AppClouds.vue";

export default {
  name: "AppContact",
  data() {
    return {
      submitted: false,
    };
  },
  components: {
    AppClouds,
  },
  methods: {
    sent() {
      this.submitted = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.contact-section {
  background: $secondary-color;
  max-width: 100%;
  padding: pxToRem(30) 0 0 0;

  h2 {
    font-size: $h2-font-size;
    font-weight: $bold;
    font-family: $heading-font;
  }

  .contact-text {
    @include media-breakpoint-down(lg) {
      padding: pxToRem(10) pxToRem(40);
    }
  }

  hr {
    @include divider($tertiary-color);
  }

  .form,
  .contact-options {
    padding: pxToRem(30) pxToRem(60);
  }

  .contact-options {
    justify-content: center;

    .contact-option {
      background: $primary-color;
      border-radius: $standard-border-radius;
      width: 100%;
      margin-bottom: pxToRem(20);
      padding: pxToRem(25);

      @include media-breakpoint-up(sm) {
        width: 75%;
        margin-bottom: pxToRem(20);
      }

      @include media-breakpoint-up(lg) {
        width: 25%;
        margin: 0 pxToRem(30);
      }

      i {
        color: $tertiary-color;
        font-size: pxToRem(36);
      }

      p {
        margin-bottom: 0;
        font-size: pxToRem(18);
      }

      a {
        color: $white;
        font-size: pxToRem(16);
        text-decoration: none;
        transition: all 300ms ease-in-out;

        @include media-breakpoint-up(sm) {
          font-size: pxToRem(18);
        }

        &:hover {
          color: $tertiary-color;
        }
      }
    }
  }

  h3 {
    font-size: pxToRem(28);
    font-weight: $semi-bold;
  }

  .contact-form {
    margin: 0 auto;
    padding: 0;

    .form-label {
      display: block;
      text-align: left;
    }

    @include media-breakpoint-up(sm) {
      padding: 0 pxToRem(50);
    }

    @include media-breakpoint-up(lg) {
      padding: 0 pxToRem(200);
    }

    input,
    textarea {
      background: $primary-color;
      border: none;
      color: $white;
      padding: pxToRem(20) pxToRem(35);
      font-size: pxToRem(18);
      border-radius: $standard-border-radius;

      &::placeholder {
        color: $white;
        opacity: 0.7;
      }
    }

    .btn-main {
      background: $tertiary-color;
      font-size: pxToRem(18);
      color: $white;
      border-radius: $standard-border-radius;
      padding: pxToRem(10) pxToRem(20);
      transition: all 500ms ease-in-out;

      &:hover {
        background: $tertiary-color;
        color: $primary-color;
        border: 1px solid $primary-color;
        font-weight: $semi-bold;
        transform: scale(1.1);
      }
    }
  }

  .clouds {
    fill: $tertiary-color;
    max-width: 100%;
    margin-bottom: 0;
  }
}
</style>
