import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import AppLayout from "../components/layout/AppLayout.vue";
import AppWelcome from "../components/layout/AppWelcome.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/appLayout",
      name: "applayout",
      component: AppLayout,
      redirect: {
        name: "appwelcome",
      },
      children: [
        {
          path: "welcome",
          name: "appwelcome",
          component: AppWelcome,
        },
        {
          path: "breeds-list/:name",
          name: "dogbreeds",
          component: () => import("../components/breeds/BreedsList.vue"),
        },
      ],
    },
  ],
});

export default router;
