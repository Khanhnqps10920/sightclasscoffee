import db from "../firebase/init";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // cart
    cart: {
      namespaced: true,

      // state
      state: () => ({
        cart: [],
      }),

      // getter
      getters: {
        getCartItem: (state) => (itemId) => {
          return state.cart.find((item) => item.id === itemId);
        },

        getCartTotal: (state) => {
          return state.cart.reduce((acc, cur) => {
            return acc + Number(cur.price) * Number(cur.quantity);
          }, 0);
        },
      },

      // mutations
      mutations: {
        ADD_ONE_TO_CART: (state, item) => {
          const cart = [...state.cart];

          const itemIndex = cart.findIndex(
            (cartItem) => cartItem.id === item.id
          );

          if (itemIndex !== -1) {
            cart[itemIndex] = {
              ...cart[itemIndex],
              quantity: cart[itemIndex].quantity + 1,
            };
          } else {
            const newItem = {
              ...item,
              quantity: 1,
            };

            cart.push(newItem);
          }

          state.cart = cart;
        },

        ADD_ITEM_TO_CART: (state, item) => {
          const cart = [...state.cart];

          const itemIndex = cart.findIndex(
            (cartItem) => cartItem.id === item.id
          );

          if (itemIndex !== -1) {
            cart[itemIndex] = {
              ...cart[itemIndex],
              quantity: cart[itemIndex].quantity + item.quantity,
            };
          } else {
            const newItem = {
              ...item,
              quantity: item.quantity,
            };

            cart.push(newItem);
          }

          state.cart = cart;
        },

        UPDATE_CART_QUANTITY: (state, payload) => {
          const cart = [...state.cart];

          const itemIndex = cart.findIndex(
            (cartItem) => cartItem.id === payload.item.id
          );

          if (itemIndex !== -1) {
            cart[itemIndex] = {
              ...cart[itemIndex],
              quantity: payload.quantity,
            };
          }

          state.cart = cart;
        },

        REMOVE_CART_ITEM: (state, payload) => {
          const cart = [...state.cart];

          const itemIndex = cart.findIndex(
            (cartItem) => cartItem.id === payload.id
          );

          cart.splice(itemIndex, 1);

          state.cart = cart;
        },
      },

      // actions
      actions: {},
    },

    // navbar
    navbar: {
      namespaced: true,
      // state
      state: () => ({
        navbarActive: false,
        adminSidebarActive: true,
      }),

      // mutations
      mutations: {
        handleNavbarActive: (state) => {
          state.navbarActive = !state.navbarActive;
        },

        handleAdminSidebarActive: (state) => {
          state.adminSidebarActive = !state.adminSidebarActive;
        },
      },
    },

    // apis
    apis: {
      namespaced: true,

      state: () => ({
        categories: [],
        coffeeCategories: [],
        products: [],
      }),

      getters: {
        getCategory: (state) => (categoryId) => {
          return state.coffeeCategories.find(
            (category) => category.id === categoryId
          );
        },

        getProductsByCategory: (state) => (categoryId) => {
          return state.products.filter(
            (product) => product.categories === categoryId
          );
        },

        getProductById: (state) => (productId) => {
          return state.products.find((product) => product.id === productId);
        },
      },

      mutations: {
        FETCH_CATEGORIES: (state, payload) => {
          state.categories = payload;
        },

        FETCH_COFFEE_CATE: (state, payload) => {
          state.coffeeCategories = payload;
        },

        FETCH_PRODUCTS: (state, payload) => {
          state.products = payload;
        },
      },

      actions: {
        getCategories: ({ commit }) => {
          const categories = [];

          db.collection("categories")
            .get()
            .then((snapShot) => {
              snapShot.forEach((doc) => {
                const category = {
                  id: doc.id,
                  ...doc.data(),
                };

                categories.push(category);
              });

              commit("FETCH_CATEGORIES", categories);
            })
            .catch((e) => {
              console.log(e);
            });
        },

        getCoffeeCategories: ({ commit }) => {
          const categories = [];
          db.collection("coffee-categories")
            .get()
            .then((snapShot) => {
              snapShot.forEach((doc) => {
                const category = {
                  id: doc.id,
                  ...doc.data(),
                };

                categories.push(category);
              });
              console.log(categories);
              commit("FETCH_COFFEE_CATE", categories);
            })
            .catch((e) => {
              console.log(e);
            });
        },

        getProducts: ({ commit }) => {
          const products = [];
          db.collection("products")
            .get()
            .then((snapShot) => {
              snapShot.forEach((doc) => {
                const product = {
                  id: doc.id,
                  ...doc.data(),
                };

                products.push(product);
              });

              commit("FETCH_PRODUCTS", products);
            })
            .catch((e) => {
              console.log(e);
            });
        },
      },
    },
  },
});
