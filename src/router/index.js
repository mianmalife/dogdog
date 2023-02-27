import * as VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/home/index.vue"),
  },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
