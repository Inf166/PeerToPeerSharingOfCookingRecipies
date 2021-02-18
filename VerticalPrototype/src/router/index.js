import Vue from "vue";
import VueRouter from "vue-router";
import Explore from "../views/Explore.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Explore",
    component: Explore
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/savedrecipies",
    name: "SavedRecipies",
    component: () =>
      import("../views/SavedRecipies.vue")
  },
  {
    path: "/newrecipe",
    name: "NewRecipe",
    component: () =>
      import("../views/NewRecipe.vue")
  },
  {
    path: "/recipe",
    name: "Recipe",
    props: true,
    component: () =>
      import("../views/Recipe.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import("../views/Profile.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>
      import("../views/Settings.vue")
  },
  {
    path: "/datenschutz",
    name: "Datenschutz",
    component: () =>
      import("../views/Datenschutz.vue")
  },
  {
    path: "/nutzungsbedingungen",
    name: "Nutzungsbedinungen",
    component: () =>
      import("../views/Nutzungsbedingungen.vue")
  },
  {
    path: "/login",
    name: "LogIn",
    component: () =>
      import("../views/LogIn.vue")
  },
  {
    path: "/logout",
    name: "LogOut",
    component: () =>
      import("../views/LogOut.vue")
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () =>
      import("../views/SignIn.vue")
  },
  {
    path: "/addfriend",
    name: "AddFriend",
    component: () =>
      import("../views/AddFriend.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
