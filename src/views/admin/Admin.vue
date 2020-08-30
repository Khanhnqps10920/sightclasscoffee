<template>
  <div class="admin admin-wrapper">
    <div class="admin__sidebar-container" :class="{active: !adminSidebarActive}">
      <AdminSideBar />
    </div>

    <div class="admin__main-container" :class="{active: !adminSidebarActive}">
      <AdminNavbar />
      <h1>test</h1>
    </div>
  </div>
</template>

<script>
// components
import AdminSideBar from "../../components/admin/AdminSideBar/AdminSideBar.vue";
import AdminNavbar from "../../components/admin/AdminNavbar/AdminNavbar.vue";

// libs
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("navbar", ["adminSidebarActive"])
  },

  components: {
    AdminSideBar,
    AdminNavbar
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/variable.scss";

.admin {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  span {
    font-family: "Quicksand", sans-serif;
  }

  .admin-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  &__sidebar-container {
    width: 21rem !important;
    background: $base-color;
    height: 100%;
    position: fixed;
    overflow: hidden;
    z-index: 9999;
    top: 0;
    left: 0;
    bottom: 0;
    // transition: width 0.1s ease;

    &.active {
      width: 5.4rem !important;

      &.active span {
        height: 0;
        width: 0;
        display: inline-block;
        overflow: hidden;
        visibility: hidden;
      }
    }
  }

  &__main-container {
    min-height: 100%;
    position: relative;
    margin-left: 21rem;

    &.active {
      margin-left: 5.4rem !important;
    }
  }
}
</style>