import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/HomePage.vue";
import Signup from "../pages/auth/Sign-up.vue";
import SignIn from "../pages/auth/Sign-in.vue";
import Restore from "../pages/auth/Restore.vue";
import User from "../pages/profile/User.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
    },
    {
      name: "Signup",
      path: "/signup",
      component: Signup,
    },
    {
      name: "SignIn",
      path: "/signin",
      component: SignIn,
    },
    {
      name: "Restore",
      path: "/restore",
      component: Restore,
    },
    {
      name: "User",
      path: "/user",
      component: User,
    }
  ],
});

export default router;
