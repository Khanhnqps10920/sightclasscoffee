<template>
  <div class="admin admin-wrapper">
    <div class="admin__sidebar-container" :class="{ active: !adminSidebarActive }">
      <AdminSideBar />
    </div>

    <div class="admin__main-container" :class="{ active: !adminSidebarActive }">
      <AdminNavbar />

      <div class="admin__main-container-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// db
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
  span,
  div {
    font-family: "Quicksand", sans-serif;
    font-size: 1.6rem;
  }

  .page-title {
    font-size: 2.5rem;
    color: $base-color;
    font-weight: 900;
    margin-bottom: 2rem;
  }

  .admin-form {
    &__control {
      display: flex;
      align-items: center;
      margin-bottom: 2.2rem;

      label {
        line-height: 4rem;
        width: 12rem;
        color: #606266;
        padding-right: 1.2rem;
        font-size: 1.4rem;
        text-align: left;
      }

      input,
      textarea,
      select {
        background-color: $white-color;
        background-image: none;
        border-radius: 0.4rem;
        border: 0.1rem solid #dcdfe6;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 4rem;
        line-height: 4rem;
        outline: 0;
        padding: 0 1.5rem;
        width: calc(100% - 120px);

        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      select {
        width: 50%;
      }

      textarea {
        height: 10rem;
      }

      input:focus,
      textarea:focus,
      select:focus,
      input:active,
      textarea:active,
      select:active {
        border-color: $base-color;
        box-shadow: none;
      }
    }

    &__file {
      display: flex;
      margin-bottom: 2.2rem;

      &-label {
        line-height: 4rem;
        width: 12rem;
        color: #606266;
        padding-right: 1.2rem;
        font-size: 1.4rem;
        text-align: left;
      }

      &-inputs {
        width: calc(100% - 120px);
      }
    }

    button {
      margin-left: 120px;
      outline: none;
      color: $white-color;
      background: $base-color;
      padding: 1.2rem 2rem;
      font-size: 1.4rem;
      border-radius: 0.4rem;
      border: none;
      transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1) ease;

      &:hover {
        background: $second-color;
      }
    }

    .text-danger {
      margin-left: 120px;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }
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
    transition: width 0.1s ease;

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

    &-content {
      padding: 20px;
    }
  }
}
</style>
