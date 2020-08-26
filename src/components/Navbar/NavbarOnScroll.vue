<template>
  <transition name="drop-down">
    <div v-if="isActive" class="navbar-scroll">
      <b-navbar variant="light" class="navbar-scroll__nav" toggleable="lg">
        <b-navbar-brand tag="div" class="navbar-scroll__brand">
          <b-link to="/">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="102px"
              height="10px"
              viewBox="0 0 102 10"
              enable-background="new 0 0 102 10"
              xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              class="bolt-logo"
            >
              <title>Sightglass Coffee</title>
              <desc>Created with Sketch.</desc>
              <g>
                <polyline
                  fill="none"
                  stroke="#522E1F"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  points="100.475,2.837 65.47,8.263 68.913,1.998 35.003,8.215 37.913,2.514 1.55,8.501"
                />
              </g>
            </svg>
          </b-link>
        </b-navbar-brand>

        <b-navbar-nav class="ml-auto navbar-scroll__list-item">
          <b-nav-item v-b-toggle.sidebar-backdrop class="navbar-scroll__icon">
            <b-icon icon="cart4"></b-icon>
          </b-nav-item>
          <b-nav-item class="navbar-scroll__icon" @click="handleNavbarActive">
            <b-icon icon="text-right" aria-label="nav"></b-icon>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    ...mapMutations("navbar", ["handleNavbarActive"])
  }
};
</script>

<style lang="scss" >
@import "../../assets/scss/variable.scss";

.navbar-scroll {
  &__nav {
    overflow: hidden;
  }

  &__brand {
    a {
      font-size: 4rem;
    }
  }

  &__icon {
    margin: 0 0.5rem;
    a {
      font-size: 2rem;
    }
  }

  &__list-item {
  }
}

@include mobile {
  .navbar-scroll__list-item {
    flex-direction: row;
  }
}

@include tablet {
  .navbar-scroll__list-item {
    flex-direction: row;
  }
}
</style>