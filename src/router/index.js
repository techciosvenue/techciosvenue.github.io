import {
  createRouter,
  createWebHistory,
} from "../../node_modules/vue-router/dist/vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import SuccessView from "../views/SuccessView.vue";

const router = createRouter({
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

    // {
    //   path: "/:catchAll(.*)",
    //   component: NotFoundComponent,
    //   name: "NotFound",
    // },
  ],
});

export default router;
