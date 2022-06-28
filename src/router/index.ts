import { createRouter, createWebHistory } from "vue-router";
import TestView from "../views/testView.vue";
import Form from "../views/form.vue";
import result from "../views/report.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*
    {
      path: "/",
      name: "form",
      component: () => import("../views/form.vue"),
    },
    */
    { path: '/projects/:id', component: TestView},
    { path: '/projects/:id/form', component: Form},
    { path: '/projects/:id/feedback', component: result},

    {
      path: "/data",
      name: "data",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/dataView.vue"),
    },
  ],
});

export default router;
