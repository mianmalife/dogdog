import * as VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/home/index.vue"),
    children: [
      {
        path: "/breedList/:breed",
        name: "breedList",
        component: () => import("@/breedList/index.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/notFound/index.vue"),
  },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
