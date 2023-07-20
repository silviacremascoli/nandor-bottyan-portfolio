<template>
  <section class="skills-section">
    <h2 class="mb-4" id="skills">Expertise</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem
      leo.<br />
      Praesent pellentesque nisi id augue tempus, eu dictum augue lobortis.
    </p>
    <hr />
    <div class="container">
      <div class="row pb-5">
        <div class="col-lg-4">
          <div class="skill">
            <i class="fa-solid fa-link mb-3"></i>
            <h3 class="mb-4">Digital Transformation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem leo. Praesent pellentesque nisi id augue tempus, eu
              dictum augue lobortis. Donec tincidunt sagittis enim. Fusce
              tincidunt sagittis nisi, vitae sodales mauris sollicitudin et.
              Suspendisse bibendum orci eget vulputate auctor. Integer quis quam
              elit. Maecenas sed ipsum eros.
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="skill">
            <i class="fa-brands fa-aws mb-3"></i>
            <h3 class="mb-4">Amazon Web Services</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem leo. Praesent pellentesque nisi id augue tempus, eu
              dictum augue lobortis. Donec tincidunt sagittis enim. Fusce
              tincidunt sagittis nisi, vitae sodales mauris sollicitudin et.
              Suspendisse bibendum orci eget vulputate auctor. Integer quis quam
              elit. Maecenas sed ipsum eros.
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="skill">
            <i class="fa-brands fa-windows mb-3"></i>
            <h3 class="mb-4">Microsoft Azure</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem leo. Praesent pellentesque nisi id augue tempus, eu
              dictum augue lobortis. Donec tincidunt sagittis enim. Fusce
              tincidunt sagittis nisi, vitae sodales mauris sollicitudin et.
              Suspendisse bibendum orci eget vulputate auctor. Integer quis quam
              elit. Maecenas sed ipsum eros.
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="skill">
            <i class="fa-brands fa-google mb-3"></i>
            <h3 class="mb-4">Google Cloud</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem leo. Praesent pellentesque nisi id augue tempus, eu
              dictum augue lobortis. Donec tincidunt sagittis enim. Fusce
              tincidunt sagittis nisi, vitae sodales mauris sollicitudin et.
              Suspendisse bibendum orci eget vulputate auctor. Integer quis quam
              elit. Maecenas sed ipsum eros.
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="skill">
            <i class="fa-solid fa-wifi mb-3"></i>
            <h3 class="mb-4">Industrial IoT Solutions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem leo. Praesent pellentesque nisi id augue tempus, eu
              dictum augue lobortis. Donec tincidunt sagittis enim. Fusce
              tincidunt sagittis nisi, vitae sodales mauris sollicitudin et.
              Suspendisse bibendum orci eget vulputate auctor. Integer quis quam
              elit. Maecenas sed ipsum eros.
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="skill">
            <i class="fa-solid fa-truck-field mb-3"></i>
            <h3 class="mb-4">Supply Management</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem leo. Praesent pellentesque nisi id augue tempus, eu
              dictum augue lobortis. Donec tincidunt sagittis enim. Fusce
              tincidunt sagittis nisi, vitae sodales mauris sollicitudin et.
              Suspendisse bibendum orci eget vulputate auctor. Integer quis quam
              elit. Maecenas sed ipsum eros.
            </p>
          </div>
        </div>
      </div>
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
.skills-section {
  background: var(--tertiary-color);
  color: white;
  max-width: 100%;
  padding: 40px 0 0 0;
}

h2 {
  font-size: 48px;
  font-weight: 700;
  font-family: var(--heading-font);
}

h3 {
  font-size: 24px;
  font-weight: 700;
  font-family: var(--heading-font);
}

i {
  font-size: 36px;
  color: var(--tertiary-color);
}

hr {
  border: 0;
  height: 2.5px;
  width: 10%;
  position: relative;
  margin: 30px auto;
  background: var(--primary-color);
}

.container {
  margin: 0 auto;
}

.col-lg-4 {
  margin-bottom: 15px;
}
.skill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--primary-color);
  border-radius: 12px;
  border: 0.5px solid var(--primary-color);
  padding: 40px;
  margin-top: 10px;
  transition: all 400ms ease-in;
}

.skill:hover {
  background: var(--tertiary-color);
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  cursor: default;
}

.skill i {
  transition: transform 1s ease-in-out;
}
.skill:hover i {
  transform: rotateY(360deg);
  color: var(--primary-color);
}

.clouds {
  fill: var(--secondary-color);
}
</style>
