<template>
  <div class="ad-sidebar">
    <ul class="ad-sidebar__menu">
      <li class="ad-sidebar__menu-item">
        <router-link to="/">
          <b-icon-clipboard-data></b-icon-clipboard-data>Dashboard
        </router-link>
      </li>
      <li class="ad-sidebar__menu-item">
        <router-link to="/">
          <b-icon-clipboard-data></b-icon-clipboard-data>Dashboard
        </router-link>
      </li>
      <li class="ad-sidebar__menu-item">
        <router-link to="/">
          <b-icon-clipboard-data></b-icon-clipboard-data>Dashboard
        </router-link>
      </li>
      <li class="ad-sidebar__menu-item">
        <router-link to="/">
          <b-icon-clipboard-data></b-icon-clipboard-data>Dashboard
        </router-link>
      </li>
      <li class="ad-sidebar__menu-item">
        <router-link to="/">
          <b-icon-clipboard-data></b-icon-clipboard-data>Dashboard
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";

.ad-sidebar {
  height: 100%;
  overflow: hidden;

  &__menu {
    width: 100%;

    li {
      padding: 2rem;
      transition: 0.4s ease;

      a {
        color: rgb(191, 203, 217);
        svg {
          margin-right: 1rem;
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
