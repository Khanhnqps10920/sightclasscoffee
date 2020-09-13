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
      state: () => ({}),

      // getter

      // mutations  
      mutations: {}

      // actions
    },

    // navbar
    navbar: {
      namespaced: true,
      // state 
      state: () => ({
        navbarActive: false,
        adminSidebarActive: true
      }),

      // mutations
      mutations: {
        handleNavbarActive: state => {
          state.navbarActive = !state.navbarActive;
        },

        handleAdminSidebarActive: state => {
          state.adminSidebarActive = !state.adminSidebarActive;
        }
      }
    },

    // apis
    apis: {
      namespaced: true,

      state: () => ({
        categories: [],
        coffeeCategories: [],
        products: []
      }),

      mutations: {
        FETCH_CATEGORIES: (state, payload) => {
          state.categories = payload;
        },

        FETCH_COFFEE_CATE: (state, payload) => {
          state.coffeeCategories = payload;
        },

        FETCH_PRODUCTS: (state, payload) => {
          state.products = payload;
        }
      },

      actions: {
        getCategories: ({
          commit
        }) => {
          const categories = [];

          db.collection("categories").get().then(snapShot => {
            snapShot.forEach(doc => {
              const category = {
                id: doc.id,
                ...doc.data()
              }

              categories.push(category)
            })

            commit("FETCH_CATEGORIES", categories);

          }).catch(e => {
            console.log(e)
          })

        },

        getCoffeeCategories: ({
          commit
        }) => {
          const categories = [];
          db.collection("coffee-categories").get().then(snapShot => {
            snapShot.forEach(doc => {
              const category = {
                id: doc.id,
                ...doc.data()
              }

              categories.push(category)
            })
            console.log(categories);
            commit("FETCH_COFFEE_CATE", categories);

          }).catch(e => {
            console.log(e)
          })
        },

        getProducts: ({ commit }) => {
          const products = [];
          db.collection("products").get().then(snapShot => {
            snapShot.forEach(doc => {
              const product = {
                id: doc.id,
                ...doc.data()
              }

              products.push(product);
            })

            commit("FETCH_PRODUCTS", products);
          }).catch(e => { console.log(e) })
        }
      }
    }

  }
});