import { createApp } from "vue";
import Particles from "vue3-particles";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App).use(router).use(Particles).mount("#app");

router.isReady().then(() => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: false
  });
});

router.afterEach(() => {
  AOS.refresh();
});
//# sourceMappingURL=main.js.map
