<template>
  <nav class="admin-navbar d-flex justify-content-between align-items-center">
    <div class="admin-navbar__menu d-flex align-items-center">
      <b-icon-menu-button @click="handleAdminSidebarActive"></b-icon-menu-button>
      <p>Dashboard</p>
    </div>

    <div class="admin-navbar__avatar">
      <b-img
        fluid
        src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
        alt="avatar admin"
      ></b-img>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations("navbar", ["handleAdminSidebarActive"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";

.admin-navbar {
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  background: $white-color;
  padding: 1rem 1rem;

  &__menu {
    svg {
      font-size: 2rem;
      font-weight: bold;
      margin-right: 1rem;
      color: $black-color;
      cursor: pointer;
    }

    p {
      color: #97a8be;
      font-weight: 500;
    }
  }

  &__avatar {
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;

    img {
      border-radius: 1rem;
    }
  }
}
</style>
