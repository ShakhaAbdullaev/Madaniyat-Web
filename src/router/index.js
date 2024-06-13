import { createRouter, createWebHistory } from "vue-router";
// import Home from "../pages/HomePage.vue";
// import Signup from "../pages/auth/Sign-up.vue";
// import SignIn from "../pages/auth/Sign-in.vue";
// import Restore from "../pages/auth/Restore.vue";
// import User from "../pages/profile/User.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import("../pages/HomePage.vue"),
    },
    {
      name: "Signup",
      path: "/signup",
      component: () => import("../pages/auth/Sign-up.vue"),
    },
    {
      name: "SignIn",
      path: "/signin",
      component: () => import("../pages/auth/Sign-in.vue"),
    },
    {
      name: "Restore",
      path: "/restore",
      component: () => import("../pages/auth/Restore.vue"),
    },
    {
      name: "User",
      path: "/user",
      component: () => import("../pages/profile/User.vue"),
      children: [
        {
          name: "Info",
          path: "info",
          component: () => import("../pages/profile/MainInfo.vue"),
        },
        {
          name: "Paricipant",
          path: "paricipants",
          component: () => import("../pages/profile/ParticipantPlace.vue"),
        },
      ],
    },
  ],
});

export default router;
