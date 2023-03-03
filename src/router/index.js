import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/Home.vue";
import AppLayout from "@/components/layout/AppLayout.vue";
const router = createRouter({
  history: createWebHashHistory(),
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
      children: [
        {
          path: "breeds-list/:dog",
          name: "dogbreeds",
          component: () => import("@/components/breeds/BreedsList.vue"),
        },
      ],
    },
    {
      path: "/404",
      name: "NoPage404",
      component: () => import("@/components/NoPage.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      redirect: "/404",
    },
  ],
});

export default router;
