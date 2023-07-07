<template>
  <div class="about">
    <div class="container">
      <div class="row p-5">
        <div class="col-lg-6 description d-flex flex-column justify-center">
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
        <div class="col-lg-6">
          <img
            src="./media/Industry-4.0-graphic.png"
            alt="industry 4.0 graphic"
            class="d-flex flex-column justify-center"
          />
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
<script>
export default {};
</script>
<style>
.about {
  background: var(--tertiary-color);
  max-width: 100%;
}
h2 {
  font-size: 42px;
}

.description {
  padding: 40px 100px;
  text-align: justify;
}

img {
  max-width: 550px;
  padding-top: 40px;
}

.clouds {
  max-width: 100%;
  fill: var(--secondary-color);
  margin-bottom: 0;
}
</style>
