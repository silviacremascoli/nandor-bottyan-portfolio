<template>
  <div class="container">
    <h2 class="mb-4">My services</h2>
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

.skill-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--primary-color);
  border-radius: 8px;
  padding: 20px 40px;
  margin: 0 10px;
  max-width: 20%;
  transition: all 400ms ease-in-out;
}

.skill-box:hover {
  background: var(--tertiary-color);
  cursor: default;
}

.blockchain {
  margin-left: 120px;
}

.clouds {
  fill: var(--tertiary-color);
}

hr {
  border: 0;
  height: 2px;
  width: 10%;
  position: relative;
  margin: 30px auto;
  background: var(--tertiary-color);
}
</style>
