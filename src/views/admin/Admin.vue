<template>
  <div class="admin admin-wrapper">
    <div class="admin__sidebar-container">
      <AdminSideBar />
    </div>

    <div class="admin__main-container">
      <h1>test</h1>
    </div>
  </div>
</template>

<script>
// components
import AdminSideBar from "../../components/admin/AdminSideBar/AdminSideBar.vue";

export default {
  components: {
    AdminSideBar
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
  }
}
</style>