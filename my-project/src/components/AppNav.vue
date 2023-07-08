<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><i class="fa-solid fa-cloud"></i></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <a class="nav-link" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#skills">Expertise</a>
          <a class="nav-link" href="#about-me">About me</a>
          <a class="nav-link" href="#projects">My Projects</a>
          <a class="nav-link mb-3" href="#contact">Contact me</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background: var(--secondary-color);
}
.navbar {
  padding: 10px 50px;
}
.nav-link {
  color: white;
  font-size: 18px;
  letter-spacing: 2px;
  transition: all 400ms ease-in-out;
}
.nav-link:hover {
  color: var(--tertiary-color);
}

.navbar-toggler {
  background: var(--tertiary-color);
}

.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
  outline: none;
  box-shadow: none;
}
.navbar-brand {
  font-size: 48px;
  color: var(--tertiary-color);
}
</style>
