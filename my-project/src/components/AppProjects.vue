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
      <div class="row">
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
      </div>
    </div>
    <svg
      class="clouds"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        d="M-5 100 Q 0 20 5 100 Z
                             M0 100 Q 5 0 10 100
                             M5 100 Q 10 30 15 100
                             M10 100 Q 15 10 20 100
                             M15 100 Q 20 30 25 100
                             M20 100 Q 25 -10 30 100
                             M25 100 Q 30 10 35 100
                             M30 100 Q 35 30 40 100
                             M35 100 Q 40 10 45 100
                             M40 100 Q 45 50 50 100
                             M45 100 Q 50 20 55 100
                             M50 100 Q 55 40 60 100
                             M55 100 Q 60 60 65 100
                             M60 100 Q 65 50 70 100
                             M65 100 Q 70 20 75 100
                             M70 100 Q 75 45 80 100
                             M75 100 Q 80 30 85 100
                             M80 100 Q 85 20 90 100
                             M85 100 Q 90 50 95 100
                             M90 100 Q 95 25 100 100
                             M95 100 Q 100 15 105 100 Z"
      ></path>
    </svg>
  </div>
</template>
<style scoped>
.container {
  background: var(--secondary-color);
  max-width: 100%;
  padding: 40px 0 0 0;
}
h2 {
  font-size: 48px;
  font-weight: 700;
}
hr {
  border: 0;
  height: 2px;
  width: 10%;
  position: relative;
  margin: 30px auto;
  background: var(--tertiary-color);
}
.container-projects {
  background: var(--primary-color);
  max-width: 1200px;
  margin: 0 auto 50px auto;
  padding: 40px 40px 0 40px;
  border-radius: 12px;
}
.embed {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
}

.clouds {
  fill: var(--tertiary-color);
  max-width: 100%;
  margin-bottom: 0;
}
</style>
