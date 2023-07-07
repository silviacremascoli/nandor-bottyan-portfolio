<template>
  <div class="container p-5">
    <div class="row p-5">
      <div class="col-lg-6 description d-flex flex-column justify-center">
        <h2 class="mb-3">Who am I?</h2>
        <p>
          Cras efficitur lacus commodo consequat rhoncus. Pellentesque dignissim
          magna nisi, vel vehicula risus tincidunt sit amet. Donec vel augue
          augue. Sed condimentum interdum congue. Sed nec convallis nulla. Sed
          nec fermentum nisi. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Quisque lectus arcu,
          vulputate eu dapibus at, rutrum id magna. Donec maximus purus id dui
          varius, eget pulvinar ex luctus. <br />
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
</template>
<script>
export default {};
</script>
<style>
.container {
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
</style>
