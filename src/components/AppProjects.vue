<template>
  <div class="container">
    <h2 id="projects" class="mb-4">My projects</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac porta
      arcu.<br />
      Donec nec urna orci. Aenean accumsan aliquam lobortis.
    </p>
    <hr class="center-diamond" />
    <div class="container-projects">
      <div
        id="carouselExampleCaptions"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <iframe
              class="embed d-block w-100"
              src="https://www.youtube.com/embed/zSWdZVtXT7E"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="carousel-caption d-none d-md-block">
              <div class="project-caption">
                <h5>Project</h5>
                <p class="m-0">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <iframe
              class="embed d-block w-100"
              src="https://www.youtube.com/embed/r5X-hFf6Bwo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="carousel-caption d-none d-md-block">
              <div class="project-caption">
                <h5>Project</h5>
                <p class="m-0">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <iframe
              class="embed d-block w-100"
              src="https://www.youtube.com/embed/vtxVK3sbZ0o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="carousel-caption d-none d-md-block">
              <div class="project-caption">
                <h5>Project</h5>
                <p class="m-0">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!-- <div class="row">
        <div class="col-lg-4">
          <iframe
            class="embed"
            src="https://www.youtube.com/embed/zSWdZVtXT7E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h3 class="mt-3">Project</h3>
          <p class="p-3 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
            porta arcu. Pellentesque sem erat, blandit id mauris non, lacinia
            efficitur lectus. Ut ex tortor, pretium ac iaculis et, sagittis nec
            felis. Donec nec urna orci. Aenean accumsan aliquam lobortis.
          </p>
        </div>
        <div class="col-lg-4">
          <iframe
            class="embed"
            src="https://www.youtube.com/embed/r5X-hFf6Bwo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h3 class="mt-3">Project</h3>
          <p class="p-3 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
            porta arcu. Pellentesque sem erat, blandit id mauris non, lacinia
            efficitur lectus. Ut ex tortor, pretium ac iaculis et, sagittis nec
            felis. Donec nec urna orci. Aenean accumsan aliquam lobortis.
          </p>
        </div>
        <div class="col-lg-4">
          <iframe
            class="embed"
            src="https://www.youtube.com/embed/vtxVK3sbZ0o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h3 class="mt-3">Project</h3>
          <p class="p-3 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
            porta arcu. Pellentesque sem erat, blandit id mauris non, lacinia
            efficitur lectus. Ut ex tortor, pretium ac iaculis et, sagittis nec
            felis. Donec nec urna orci. Aenean accumsan aliquam lobortis.
          </p>
        </div>
      </div> -->
    <AppClouds />
  </div>
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
.container {
  background: var(--tertiary-color);
  max-width: 100%;
  padding: 40px 0 0 0;
}
h2 {
  font-size: 48px;
  font-weight: 700;
}
hr {
  border: 0;
  height: 2.5px;
  width: 10%;
  position: relative;
  margin: 30px auto;
  background: var(--secondary-color);
}
.container-projects {
  background: var(--primary-color);
  max-width: 1200px;
  margin: 0 auto 50px auto;
  padding: 40px;
  border-radius: 12px;
}
.embed {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
}

.project-caption {
  background: var(--primary-color);
  padding: 15px;
  border-radius: 8px;
}

.clouds {
  fill: var(--secondary-color);
  max-width: 100%;
  margin-bottom: 0;
}
</style>
