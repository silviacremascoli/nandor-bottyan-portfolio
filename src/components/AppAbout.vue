<template>
  <section class="about-section">
    <div class="container" id="about-me">
      <div class="row">
        <div
          class="col-lg-6 description d-flex flex-column justify-center animate__animated animate__fadeInLeft"
        >
          <h2 class="mb-3">Who am I?</h2>
          <p>
            Cras efficitur lacus commodo consequat rhoncus. Pellentesque
            dignissim magna nisi, vel vehicula risus tincidunt sit amet. Donec
            vel augue augue. Sed condimentum interdum congue. Sed nec convallis
            nulla. Sed nec fermentum nisi. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Quisque lectus
            arcu, vulputate eu dapibus at, rutrum id magna. Donec maximus purus
            id dui varius, eget pulvinar ex luctus. <br />
            <br />
            Nullam a odio purus. Fusce pretium egestas purus, sed finibus elit
            pellentesque non. Nunc bibendum elementum eros volutpat consectetur.
            Integer condimentum tortor a nibh porta malesuada.
          </p>
        </div>
        <div class="col-lg-6 cloud-video">
          <video
            src="./media/industry_4.0.mp4"
            width="600"
            class="img-fluid"
            autoplay
            loop
          ></video>
        </div>
      </div>
      <img
        src="./media/floating_cloud.png"
        class="floating-cloud"
        alt="floating cloud"
      />
    </div>
    <AppClouds />
  </section>
</template>
<script lang="ts">
import AppClouds from "./AppClouds.vue";

export default {
  name: "AppSkills",
  components: {
    AppClouds,
  },
};
</script>
<style scoped>
.about-section {
  background: var(--secondary-color);
  max-width: 100%;
}
h2 {
  font-size: 48px;
  font-weight: 700;
  font-family: var(--heading-font);
}

.description {
  padding: 60px 60px 40px 60px;
  text-align: justify;
}

video {
  padding-top: 40px;
}

.floating-cloud {
  width: 50px;
  height: 50px;
  animation: fly 10s linear infinite;
  top: 0;
  right: 0;
  position: fixed;
  z-index: 999;
  pointer-events: none;
}

@keyframes fly {
  0% {
    transform: translate(0.11vh);
    opacity: 0.5;
  }
  50% {
    transform: translate(110vw, 0);
    opacity: 1;
  }
  100% {
    transform: translate(0.11vh);
    opacity: 0.5;
  }
}

.clouds {
  max-width: 100%;
  fill: var(--tertiary-color);
  margin-bottom: 0;
}

@media (max-width: 992px) {
  .description {
    padding: 60px 0 30px 0;
    text-align: center;
  }

  video {
    padding: 30px 0 40px 0;
    max-width: 500px;
  }
}

@media (max-width: 576px) {
  video {
    max-width: 300px;
    padding: 0 0 20px 0;
  }

  .description {
    padding: 40px 40px 20px 40px;
  }
}
</style>
