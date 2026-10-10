import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/blog/vue-3-guide",
    name: "vue3-guide",
    component: () => import("../views/ArticleVue3Guide.vue"),
  },
  {
    path: "/blog/css-techniques",
    name: "css-techniques",
    component: () => import("../views/ArticleCssTechniques.vue"),
  },
  {
    path: "/blog/web-future",
    name: "web-future",
    component: () => import("../views/ArticleWebFuture.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If the user clicks the browser Back/Forward buttons, restore their exact previous scroll position
    if (savedPosition) {
      return savedPosition;
    }

    // If navigating to a section anchor hash (e.g. #skills on the home page)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 90,
      };
    }

    // For all other navigation, scroll to the top of the page
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    return { top: 0, left: 0 };
  }
});

export default router;