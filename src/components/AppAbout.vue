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
            src="./media/Cloud.mp4"
            width="600"
            class="img-fluid"
            autoplay
            loop
            muted
            playsinline
            aria-hidden="true"
          ></video>
        </div>
      </div>
    </div>
    <AppClouds />
  </section>
</template>
<script lang="ts">
import AppClouds from "./AppClouds.vue";

export default {
  name: "AppAbout",
  components: {
    AppClouds,
  },
};
</script>
<style lang="scss" scoped>
.about-section {
  background: $secondary-color;
  max-width: 100%;

  .description {
    padding: pxToRem(40) pxToRem(40) pxToRem(20) pxToRem(40);
    text-align: center;

    @include media-breakpoint-up(sm) {
      padding: pxToRem(60) 0 pxToRem(30) 0;
    }

    @include media-breakpoint-up(lg) {
      padding: pxToRem(60) pxToRem(60) pxToRem(40) pxToRem(60);
      text-align: justify;
    }

    h2 {
      font-size: $h2-font-size;
      font-weight: $bold;
      font-family: $heading-font;
    }
  }

  .cloud-video {
    display: flex;
    justify-content: center;
    align-items: center;
    
    video {
      max-width: pxToRem(300);
      padding: 0 0 pxToRem(20) 0;
  
      @include media-breakpoint-up(sm) {
        padding: pxToRem(30) 0 pxToRem(40) 0;
        max-width: pxToRem(500);
      }
  
      @include media-breakpoint-up(lg) {
        padding-top: pxToRem(40);
      }
    }
  }
  .clouds {
    fill: $tertiary-color;
    margin-bottom: 0;
  }
}
</style>
