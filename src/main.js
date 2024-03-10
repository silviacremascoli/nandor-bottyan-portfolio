import { createApp } from "vue";
import Particles from "vue3-particles";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App.vue";
import Blog from "./views/Blog.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/",
    component: App,
  },
];

const router = new VueRouter({
  routes,
});

createApp(App).use(Particles).use(router).mount("#app");
//# sourceMappingURL=main.js.map
