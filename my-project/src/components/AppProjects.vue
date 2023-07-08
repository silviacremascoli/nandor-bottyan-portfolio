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
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  background: var(--secondary-color);
  max-width: 100%;
  padding: 30px;
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
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
}
.embed {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
}
</style>
