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
      }),

      // getter

      // mutations  
      mutations: {
      }

      // actions
    },

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
    }

  }
});
