import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
    path: "/collection",
    name: "collectionAll",
    component: () => import("../views/Shop.vue"),
    children: [
      {
        path: "/",
        component: () => import("../components/Shop/Collections.vue")
      },

      {
        path: ":category",
        component: () => import("../components/Shop/CollectionsByCategory.vue")
      }
    ]
  },

  {
    path: "/checkout",
    name: "checkOut",
    component: () => import("../views/CheckOut.vue")
  },

  {
    path: "/product/:slug",
    name: "product",
    component: () => import("../views/Product.vue")
  }


];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  routes
});

export default router;
