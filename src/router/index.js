import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      scrollToTop: true
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      scrollToTop: true
    }
  },

  {
    path: "/collection",
    name: "collection",
    component: () => import("../views/Shop.vue"),
    meta: {
      scrollToTop: true
    },
    children: [{
        path: "/",
        name: "collections",
        component: () => import("../components/Shop/Collections.vue")
      },

      {
        path: ":category",
        name: "collectionByCategory",
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
    component: () => import("../views/Product.vue"),
    meta: {
      scrollToTop: true
    }
  },

  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/Admin.vue"),
    meta: {
      isAdmin: true
    },
    children: [{
        path: "/",
        name: "DashBoard",
        component: () => import("../views/admin/DashBoard/DashBoard.vue"),
        meta: {
          isAdmin: true
        }
      },

      {
        path: "add-product",
        name: "AddProduct",
        component: () => import("../views/admin/AddProduct/AddProduct.vue"),
        meta: {
          isAdmin: true
        }
      },
      {
        path: "add-category",
        name: "AddCategory",
        component: () => import("../views/admin/AddCategory/AddCategory.vue"),
        meta: {
          isAdmin: true
        }
      }
    ]
  }


];

const router = new VueRouter({
  mode: "history",

  scrollBehavior(to, from, savedPosition) {
    console.log(from);

    if (savedPosition) return savedPosition;

    if (to.matched.some(m => m.meta.scrollToTop)) {
      return {
        x: 0,
        y: 0
      };
    }
  },

  routes
});

export default router;