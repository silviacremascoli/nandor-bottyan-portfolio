import { createApp, nextTick } from "vue";
import Particles from "vue3-particles";
import "aos/dist/aos.css";
import 'bootstrap';
import App from "./App.vue";
import router from './router';

// Create an Intersection Observer to make AOS work with Vue Router and dynamically added elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

// Observe all current and future AOS elements
function observeAosElements() {
  const elements = document.querySelectorAll('[data-aos]');

  if (reducedMotionQuery.matches) {
    elements.forEach(el => el.classList.add('aos-init', 'aos-animate'));
    return;
  }

  elements.forEach(el => {
    if (el.classList.contains('aos-init')) return;
    el.classList.add('aos-init');
    observer.observe(el);
  });
}

reducedMotionQuery.addEventListener('change', observeAosElements);

router.isReady().then(() => {
  nextTick(observeAosElements);
});

router.afterEach(() => {
  nextTick(observeAosElements);
});

const mutationObserver = new MutationObserver(observeAosElements);
mutationObserver.observe(document.body, {
  childList: true,
  subtree: true
});

createApp(App).use(router).use(Particles).mount("#app");