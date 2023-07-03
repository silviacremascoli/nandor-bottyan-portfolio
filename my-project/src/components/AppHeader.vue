<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nandor Bottyan</a>
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
        <div class="navbar-nav">
          <a class="nav-link" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">About me</a>
          <a class="nav-link" href="#">My Projects</a>
          <a class="nav-link disabled">Contact me</a>
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
.navbar a {
  color: white;
}
</style>
