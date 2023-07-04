<template>
  <div class="container">
    <h2>My services</h2>
    <div class="skill">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 skill-box">
            <i class="fa-solid fa-link mb-3"></i>
            <h3>Blockchain</h3>
          </div>

          <div class="col-lg-3 skill-box">
            <i class="fa-brands fa-aws mb-3"></i>
            <h3>Amazon Web Services</h3>
          </div>
          <div class="col-lg-3 skill-box">
            <i class="fa-brands fa-microsoft mb-3"></i>
            <h3>Microsoft Azure</h3>
          </div>
          <div class="col-lg-3 skill-box">
            <i class="fa-brands fa-google mb-3"></i>
            <h3>Google Cloud</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  background: var(--secondary-color);
  color: white;
  margin: 0 auto;
  max-width: 100%;
  padding: 20px 0;
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
  background: var(--primary-color);
  border-radius: 8px;
  padding: 20px;
  margin: 0 10px;
  max-width: 20%;
  transition: all 200ms ease-in-out;
}

.skill-box:hover {
  background: var(--tertiary-color);
}
</style>
