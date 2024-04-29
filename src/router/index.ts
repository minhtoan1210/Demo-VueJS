import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Default from "../layouts/Default.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: Default,
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/SlotGameView.vue"),
      meta: {
        layout: Default,
      },
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        layout: Default,
      },
    },
  ],
});

export default router;
