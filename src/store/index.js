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
        categories: []
      }),

      mutations: {
        FETCH_CATEGORIES: (state, payload) => {
          state.categories = payload
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

        }
      }
    }

  }
});