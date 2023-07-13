<template>
  <div class="container">
    <h2 class="mb-4" id="skills">Expertise</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem
      leo.<br />
      Praesent pellentesque nisi id augue tempus, eu dictum augue lobortis.
    </p>
    <hr class="center-diamond" />
    <div class="skill">
      <div class="container">
        <div class="row pb-5">
          <div class="col-lg-3 skill-box blockchain">
            <i class="fa-solid fa-link mb-3"></i>
            <h3 class="mb-4">Blockchain</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem leo. Praesent pellentesque nisi id augue tempus, eu
              dictum augue lobortis. Donec tincidunt sagittis enim. Fusce
              tincidunt sagittis nisi, vitae sodales mauris sollicitudin et.
              Suspendisse bibendum orci eget vulputate auctor. Integer quis quam
              elit. Maecenas sed ipsum eros.
            </p>
          </div>

          <div class="col-lg-3 skill-box">
            <i class="fa-brands fa-aws mb-3 mt-4"></i>
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
          <div class="col-lg-3 skill-box">
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
          <div class="col-lg-3 skill-box">
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
      </div>
    </div>
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
  color: white;
  margin: 0 auto;
  max-width: 100%;
  padding: 40px 0 0 0;
}

h2 {
  font-size: 48px;
  font-weight: 700;
}

h3 {
  font-size: 24px;
  font-weight: 700;
}

i {
  font-size: 36px;
}

hr {
  border: 0;
  height: 2.5px;
  width: 10%;
  position: relative;
  margin: 30px auto;
  background: var(--primary-color);
}
.skill-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--primary-color);
  border-radius: 12px;
  border: 0.5px solid var(--primary-color);
  padding: 20px 40px;
  margin: 0 10px;
  max-width: 20%;
  transition: all 400ms ease-in;
}

.skill-box:hover {
  background: var(--tertiary-color);
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  cursor: default;
}

.blockchain {
  margin-left: 120px;
}

.clouds {
  fill: var(--secondary-color);
}
</style>
