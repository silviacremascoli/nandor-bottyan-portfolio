<template>
  <div class="container">
    <h2 id="contact">Contact me</h2>
    <div class="row">
      <div class="col-lg-6 mt-5 contact-form">
        <h2 class="mb-5 text-center">Write me a message</h2>
        <form method="POST" name="contact" netlify>
          <div class="form-group mb-3">
            <label for="name-surname" class="ms-2">Name and surname</label>
            <input
              type="text"
              class="form-control mt-2"
              id="name-surname"
              name="name"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="email-address" class="ms-2">Email address</label>
            <input
              type="email"
              class="form-control mt-2"
              id="email-address"
              name="email"
              required
            />
          </div>
          <div class="form-group mb-4">
            <label for="your-message" class="ms-2">Your message:</label>
            <textarea
              class="form-control mt-2"
              id="your-message"
              rows="8"
              name="message"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-main">Send!</button>
        </form>
      </div>
      <div class="col-lg-6 mt-5 d-flex flex-column justify-content-center">
        <div class="text-center">
          <h2 class="mb-5">Or find me here:</h2>
          <h3><i class="fa-regular fa-envelope me-2"></i>Email</h3>
          <p>
            <a
              href="mailto:silcremascoli@gmail.com"
              class="contact-link"
              title="Email Silvia Cremascoli"
              >silcremascoli@gmail.com</a
            >
          </p>
          <h3><i class="fa-brands fa-linkedin me-2"></i>LinkedIn</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/silvia-cremascoli/"
              class="contact-link"
              target="_blank"
              title="LinkedIn Silvia Cremascoli"
              >@Silvia Cremascoli</a
            >
          </p>
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
  background: var(--tertiary-color);
  max-width: 100%;
  padding: 30px 0 0 0;
}
.row {
  padding: 30px 60px;
}

.contact-details h1 {
  font-size: 64px;
}

.contact-details h2 {
  font-size: 36px;
}

.contact-details h3 {
  font-size: 24px;
}

.contact-form {
  border-right: 1px solid white;
  margin: 0 auto;
  padding: 0 80px;
  color: var(--quaternary-color);
}

.contact-form input,
.contact-form textarea {
  color: var(--quaternary-color);
}

.btn-main {
  background: var(--primary-color);
  font-size: 18px;
  color: white;
  border-radius: 4px;
  padding: 10px 20px;
  transition: all 300ms ease-in-out;
  transition: transform 0.5s;
}

.btn-main:hover {
  background: var(--tertiary-color);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  transform: scale(1.1);
}

.clouds {
  max-width: 100%;
}
</style>
