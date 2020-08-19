<template>
  <div id="app">
    <div class="navbar-wrapper">
      <Navbar :isActive="navbarActive" />
      <NavbarScroll :isActive="scrollNavbarActive" :onMenuClick="handleMenuClick" />
    </div>
    <SideBar />

    <router-view />
  </div>
</template>

<script>
// component
import Navbar from "./components/Navbar/Navbar";
import NavbarScroll from "./components/Navbar/NavbarOnScroll";
import SideBar from "./components/CartSideBar/CartSideBar";

// libs
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Navbar,
    NavbarScroll,
    SideBar
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
    // navbar scroll
    handleScroll() {
      if (window.pageYOffset > 80) {
        this.scrollNavbarActive = true;
      } else {
        this.scrollNavbarActive = false;
        this.navbarActive = false;
      }
    },

    // navbar normal
    handleMenuClick() {
      this.handleNavbarActive();
    }
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
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

button.btn-add {
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

button.btn-add:hover {
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
