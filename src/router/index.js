import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import SuccessView from "../views/SuccessView.vue";

const router = createRouter({
  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/success",
      name: "success",
      component: SuccessView,
    },

    {
      path: "/:catchAll(.*)",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;
