<template>
  <div class="container">
    <div class="social-links pt-4 d-flex justify-content-center">
      <a
        href="https://www.linkedin.com/in/silvia-cremascoli/"
        target="_blank"
        title="LinkedIn Silvia Cremascoli"
        ><i class="fa-brands fa-linkedin"></i
      ></a>
      <a
        href="https://github.com/silviacremascoli"
        target="_blank"
        title="GitHub Silvia Cremascoli"
        ><i class="fa-brands fa-github"></i
      ></a>
      <a
        href="https://drive.google.com/file/d/1lcpjhCugvGs7G4qIBis6Uv1gtVaqoWjo/view?usp=drive_link"
        target="_blank"
        title="Resume Silvia Cremascoli"
        ><i class="fa-solid fa-file"></i
      ></a>
      <a
        href="https://drive.google.com/file/d/1-nZm2vqTzP2DF2JLJHuSTcbyV-6yny3t/view?usp=share_link"
        target="_blank"
        title="Certificates Silvia Cremascoli"
        ><i class="fa-solid fa-certificate"></i
      ></a>
    </div>
    <footer>
      <p>
        This website was coded by
        <a href="https://silviacremascoli.com" target="_blank"
          >Silvia Cremascoli</a
        >
      </p>
    </footer>
  </div>
</template>
<style scoped>
.container {
  background: var(--tertiary-color);
  max-width: 100%;
  padding: 0;
}
footer {
  color: white;
  background: var(--tertiary-color);
  padding: 25px 0;
  letter-spacing: 1px;
  font-weight: 500;
}

footer a {
  color: var(--secondary-color);
  text-decoration: none;
  transition: all 200ms ease-in-out;
}

footer a:hover {
  text-decoration: underline;
}

.clouds {
  max-width: 100%;
}

.social-links a {
  margin: 0 15px;
  color: var(--tertiary-color);
  background: var(--secondary-color);
  padding: 10px 16px;
  font-size: 18px;
  border-radius: 50%;
  border: 0.5px solid var(--primary-color);
  transition: all 300ms ease-in-out;
  transition: transform 0.5s;
}

.social-links a:hover {
  background: var(--primary-color);
  transform: scale(1.2);
}
</style>
