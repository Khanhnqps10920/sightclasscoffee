<template>
  <div class="ad-sidebar">
    <ul class="ad-sidebar__menu">
      <li class="ad-sidebar__menu-item">
        <router-link to="/admin">
          <b-icon-clipboard-data></b-icon-clipboard-data>
          <span>Dashboard</span>
        </router-link>
      </li>

      <li class="ad-sidebar__menu-item">
        <router-link :to="{ name: 'AddCategory' }">
          <b-icon-card-text></b-icon-card-text>
          <span>Category</span>
        </router-link>
      </li>

      <li class="ad-sidebar__menu-item">
        <router-link :to="{ name: 'AddCoffeeCategory' }">
          <b-icon-cup></b-icon-cup>
          <span>Coffee Category</span>
        </router-link>
      </li>

      <li class="ad-sidebar__menu-item">
        <router-link :to="{ name: 'AddProduct' }">
          <b-icon-cup></b-icon-cup>
          <span>Product</span>
        </router-link>
      </li>

      <li class="ad-sidebar__menu-item">
        <router-link to="/add-product">
          <b-icon-cart></b-icon-cart>
          <span>Orders</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("navbar", ["adminSidebarActive"]),
  },
};
</script>

<style lang="scss" >
@import "@/assets/scss/variable.scss";

.ad-sidebar {
  height: 100%;
  overflow: hidden;
  width: 100%;
  height: 500px;

  &__menu {
    width: 21rem !important;

    li {
      padding: 2rem;
      transition: 0.4s ease;

      a {
        display: inline-block;
        color: rgb(191, 203, 217);
        svg {
          margin-right: 1rem;
          transition: 1s ease;
        }
        span {
          transition: 1s ease;
        }
      }

      &:hover {
        background: $second-color;
        cursor: pointer;
        a {
          text-decoration: none;
          color: $white-color;
        }
      }
    }
  }
}
</style>
