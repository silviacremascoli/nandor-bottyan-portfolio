<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="./media/logo_nav.png" alt="Nandor Bottyan logo" class="logo"
      /></a>
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
        <div class="navbar-nav ms-auto nav-underline">
          <a class="nav-link home-link" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#skills">Expertise</a>
          <a class="nav-link" href="#about-me">About me</a>
          <a class="nav-link" href="#projects">My Projects</a>
          <a class="nav-link contact" href="#contact">Contact me</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background: var(--secondary-color);
  max-width: 100%;
}
.navbar {
  padding: 5px 50px;
}
.nav-link {
  color: var(--tertiary-color);
  font-size: 18px;
  letter-spacing: 1.5px;
  text-align: left;
  padding-bottom: 2px;
  transition: all 400ms ease-in-out;
  transition: transform 0.5s;
}
.nav-link:hover {
  transform: scale(1.1);
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
.logo {
  max-width: 60px;
}

@media (max-width: 992px) {
  .contact {
    margin-bottom: 20px;
  }
}

@media (max-width: 576px) {
  .navbar {
    padding: 4px 20px;
  }

  .home-link {
    padding-top: 20px;
  }
}
</style>
