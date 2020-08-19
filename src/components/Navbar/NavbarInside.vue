<template>
  <b-navbar class="navbar-scroll__nav navbar" toggleable="lg">
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
              stroke="#ffffff"
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

    <b-navbar-nav class="ml-auto navbar-scroll__list-item navbar__list">
      <b-nav-item
        v-b-toggle.sidebar-backdrop
        class="navbar-scroll__icon hero__icon navbar__list-item"
      >
        <b-icon icon="cart4"></b-icon>
      </b-nav-item>
      <b-nav-item class="navbar-scroll__icon hero__icon navbar__list-item">
        <b-icon icon="text-right" aria-label="nav" @click="onMenuClick"></b-icon>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  props: {
    onMenuClick: {
      type: Function,
      default: () => 1
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";
.navbar-scroll__icon a.nav-link {
  color: $white-color !important;
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