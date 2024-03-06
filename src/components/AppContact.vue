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
        <div class="d-flex flex-column justify-content-center">
          <i class="fa-solid fa-envelope mb-3"></i>
          <p>Email me:</p>
          <a href="mailto:nandor.bottyan@gmail.com" class="fw-semibold"
            >nandor.bottyan@gmail.com</a
          >
        </div>
      </div>
      <div
        class="col-lg-4 contact-option"
        data-aos="zoom-in"
        data-aos-duration="3000"
        data-aos-easing="ease-in"
      >
        <div class="d-flex flex-column justify-content-center">
          <i class="fa-solid fa-phone mb-3"></i>
          <p>Call me:</p>
          <p class="fw-semibold">+436704078150</p>
        </div>
      </div>
      <div
        class="col-lg-4 contact-option"
        data-aos="zoom-in"
        data-aos-duration="3500"
        data-aos-easing="ease-in"
      >
        <div class="d-flex flex-column justify-content-center">
          <i class="fa-brands fa-linkedin mb-3"></i>
          <p>Find me on LinkedIn:</p>
          <a
            href="https://www.linkedin.com/in/nandor-bottyan/"
            target="_blank"
            class="fw-semibold"
            >/nandor-bottyan</a
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
        <form method="POST" name="contact" netlify>
          <div class="row g-3">
            <div class="col-lg">
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                aria-label="Name"
              />
            </div>
            <div class="col-lg">
              <input
                type="text"
                class="form-control"
                placeholder="Surname"
                aria-label="Surname"
              />
            </div>
            <div class="col-lg-7">
              <input
                type="email"
                class="form-control"
                placeholder="Email address"
                aria-label="Email address"
              />
            </div>
          </div>
          <div class="form-group mb-4">
            <textarea
              class="form-control mt-4"
              placeholder="Your message..."
              id="your-message"
              rows="8"
              name="message"
              required
            ></textarea>
          </div>
          <button v-on:click.prevent="sent" type="submit" class="btn btn-main">
            Send!
          </button>
        </form>
      </div>
    </div>
    <AppClouds />
  </section>
</template>
<script lang="ts">
import AppClouds from "./AppClouds.vue";
import AOS from "aos";

export default {
  name: "AppContact",
  components: {
    AppClouds,
  },
  mounted() {
    AOS.init();
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    sent: function (event: MouseEvent) {
      alert("Thank you! I'll answer you as soon as possible!");
    },
  },
};
</script>
<style lang="scss" scoped>
.contact-section {
  background: $secondary-color;
  max-width: 100%;
  padding: 30px 0 0 0;
}
h2 {
  font-size: 48px;
  font-weight: 700;
  font-family: $heading-font;
}

hr {
  border: 0;
  height: 3px;
  width: 10%;
  position: relative;
  margin: 30px auto;
  background: $tertiary-color;
}
.form,
.contact-options {
  padding: 30px 60px;
}

.contact-options {
  justify-content: center;
}

.contact-option {
  background: $primary-color;
  border-radius: 12px;
  width: 25%;
  margin: 0 30px;
  padding: 25px;
}

.contact-option i {
  color: $tertiary-color;
  font-size: 36px;
}

.contact-option p {
  margin-bottom: 0;
  font-size: 18px;
}

.contact-option a {
  color: white;
  font-size: 18px;
  text-decoration: none;
  transition: all 300ms ease-in-out;
}

h3 {
  font-size: 28px;
  font-weight: 600;
}

.contact-option a:hover {
  color: $tertiary-color;
}

.contact-form {
  margin: 0 auto;
  padding: 0 200px;
}

.contact-form input,
.contact-form textarea {
  background: $primary-color;
  border: none;
  color: white;
  padding: 20px 35px;
  font-size: 18px;
  border-radius: 12px;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: white;
  opacity: 0.7;
}

/* .contact-form input:focus,
.contact-form textarea:focus {
  border: 1px solid white;
} */

.btn-main {
  background: $tertiary-color;
  font-size: 18px;
  color: white;
  border-radius: 12px;
  padding: 10px 20px;
  transition: all 500ms ease-in-out;
}

.btn-main:hover {
  background: $tertiary-color;
  color: $primary-color;
  border: 1px solid $primary-color;
  font-weight: 600;
  transform: scale(1.1);
}

.clouds {
  fill: $tertiary-color;
  max-width: 100%;
  margin-bottom: 0;
}

@media (max-width: 992px) {
  .contact-text {
    padding: 10px 40px;
  }
  .contact-option {
    width: 75%;
    margin-bottom: 20px;
  }
  .contact-form {
    padding: 0 50px;
  }
}

@media (max-width: 576px) {
  .contact-option {
    width: 100%;
    margin-bottom: 20px;
  }
  .contact-option a {
    font-size: 16px;
  }
  .contact-form {
    padding: 0;
  }
}
</style>
