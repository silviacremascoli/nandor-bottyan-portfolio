<template>
  <section class="about-section" id="about-me">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 description d-flex flex-column justify-center"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-easing="ease-in"
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
        <div
          class="col-lg-6 cloud-video"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-easing="ease-in"
        >
          <video
            src="./media/industry_4.0.mp4"
            width="600"
            class="img-fluid"
            autoplay
            loop
          ></video>
        </div>
      </div>
      <div class="floating-clouds">
        <img
          src="./media/floating_cloud.png"
          class="floating-cloud-1 animation"
          alt="floating cloud"
        />
        <img
          src="./media/floating_cloud.png"
          class="floating-cloud-2 animation"
          alt="floating cloud"
        />
        <img
          src="./media/floating_cloud.png"
          class="floating-cloud-3 animation"
          alt="floating cloud"
        />
      </div>
    </div>
    <AppClouds />
  </section>
</template>
<script lang="ts">
import AppClouds from "./AppClouds.vue";
import AOS from "aos";

export default {
  name: "AppSkills",
  components: {
    AppClouds,
  },
  mounted() {
    AOS.init();
  },
};
</script>
<style lang="scss" scoped>
.about-section {
  background: $secondary-color;
  max-width: 100%;
}

h2 {
  font-size: 48px;
  font-weight: 700;
  font-family: $heading-font;
}

.description {
  padding: 60px 60px 40px 60px;
  text-align: justify;
}

video {
  padding-top: 40px;
}

.animation {
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  opacity: 0;
}

.floating-cloud-1 {
  top: 2000px;
  max-width: 70px;
  -webkit-animation: cloud-1 35s linear 6s infinite;
  animation: cloud-1 35s linear 6s infinite;
}
.floating-cloud-2 {
  top: 1800px;
  max-width: 50px;
  -webkit-animation: cloud-2 25s linear 4s infinite;
  animation: cloud-2 25s linear 6s infinite;
}

.floating-cloud-3 {
  top: 2150px;
  max-width: 60px;
  -webkit-animation: cloud-3 30s linear 8s infinite;
  animation: cloud-3 30s linear 6s infinite;
}
.floating-clouds img {
  position: absolute;
  z-index: 0;
  height: auto;
}

@keyframes cloud-1 {
  0% {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    right: 0;
  }
  10% {
    opacity: 0.3;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    right: 200px;
  }
  90% {
    opacity: 0.3;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    right: 1100px;
  }
  100% {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    right: 1200px;
  }
}

@keyframes cloud-2 {
  0% {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    right: 0;
  }
  10% {
    opacity: 0.4;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    right: 200px;
  }
  90% {
    opacity: 0.4;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    right: 1100px;
  }
  100% {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    right: 1200px;
  }
}

@keyframes cloud-3 {
  0% {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    right: 0;
  }
  10% {
    opacity: 0.2;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    right: 200px;
  }
  90% {
    opacity: 0.2;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    right: 1100px;
  }
  100% {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    right: 1200px;
  }
}

.clouds {
  fill: $tertiary-color;
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
  .floating-cloud-1 {
    top: 3610px;
    max-width: 50px;
    animation-duration: 20s;
    animation-delay: 4s;
  }
  .floating-cloud-2 {
    top: 3220px;
    animation-duration: 20s;
    animation-delay: 2s;
  }
  .floating-cloud-3 {
    top: 4010px;
    animation-duration: 20s;
    animation-delay: 6s;
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
