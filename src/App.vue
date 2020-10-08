<template>
  <div id="app">
    <div class="navbar-wrapper" v-if="!$route.meta.isAdmin">
      <Navbar :isActive="navbarActive" />
      <NavbarScroll :isActive="scrollNavbarActive" />
    </div>
    <SideBar />

    <vue-page-transition name="fade-in-right">
      <router-view />
    </vue-page-transition>

    <Footer v-if="!$route.meta.isAdmin" />
  </div>
</template>

<script>
// component
import Navbar from "./components/Navbar/Navbar";
import NavbarScroll from "./components/Navbar/NavbarOnScroll";
import SideBar from "./components/CartSideBar/CartSideBar";
import Footer from "./components/Footer/Footer.vue";

// libs
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  components: {
    Navbar,
    NavbarScroll,
    SideBar,
    Footer
  },

  // data
  data() {
    return {
      scrollNavbarActive: false
    };
  },

  // computed
  computed: {
    ...mapState("navbar", ["navbarActive"])
  },
  // methods
  methods: {
    ...mapMutations("navbar", ["handleNavbarActive"]),
    ...mapActions("apis", [
      "getCategories",
      "getCoffeeCategories",
      "getProducts"
    ]),
    // navbar scroll
    handleScroll() {
      if (window.pageYOffset > 80) {
        this.scrollNavbarActive = true;
      } else {
        this.scrollNavbarActive = false;
      }
    },

    // navbar normal
    handleMenuClick() {
      this.handleNavbarActive();
    }
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);

    this.getCategories();

    this.getCoffeeCategories();

    this.getProducts();
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
@import "./assets/scss/variable.scss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
}

body {
  position: relative;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Pangolin", cursive;
}

p {
  margin: 0;
  padding: 0;
}

span,
p,
a {
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $base-color;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.page {
  transition: 0.4s ease;
}

.page.transformY {
  transform: translateY(80px);
}

.b-sidebar {
  width: 400px;
}

.custom-checkbox .custom-control-label::before {
  background-color: none;
  outline: none;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: $base-color;
  border-color: $base-color;
  outline: none;
}

.custom-control-input:focus {
  border-color: #522e1f;
  box-shadow: 0 0 0 0.2rem #795548;
}

.form-group {
  input {
    padding: 2rem 1rem;

    &:focus {
      border-color: $base-color;
      box-shadow: 0 0 0 0.2rem #795548;
    }

    &.error {
      border-color: red;
      box-shadow: none;
    }
  }
}

.btn-add {
  outline: none;
  background: transparent;
  border: $border;
  color: $base-color;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 1.6rem;
  padding: 5px 10px;
  transition: 0.4s ease;
}

.btn-add:hover {
  color: $white-color;
  background: $base-color;
}

.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}

// animation

// dropdown
.drop-down-enter-active {
  animation: drop-down 0.5s;
}
.drop-down-leave-active {
  animation: drop-down 0.5s reverse;
}

@keyframes drop-down {
  0% {
    height: 0;
    opacity: 0;
  }

  50% {
    height: 50%;
    opactiy: 0.5;
  }

  100% {
    height: 100%;
    opacity: 1;
  }
}

// height

.height-enter-active {
  animation: drop-top 0.5s;
}

.height-leave-active {
  animation: drop-top 0.5s reverse;
}

@keyframes drop-top {
  0% {
    transform: scaleY(0.5);
  }

  50% {
    transform: scaleY(1.2);
  }

  100% {
    transform: scaleY(1);
  }
}
</style>
