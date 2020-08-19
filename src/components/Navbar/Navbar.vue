<template>
  <transition name="height">
    <nav v-if="isActive" class="navbar">
      <ul class="navbar__list">
        <li class="navbar__item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="navbar__item">
          <router-link to="/shop">Shop</router-link>
        </li>
        <li class="navbar__item">
          <router-link to="/link">Link</router-link>
        </li>
        <li class="navbar__item">
          <router-link to="about">About</router-link>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";

.navbar {
  width: 100%;
  background: $base-color;
  padding: 0;

  transform-origin: top;

  &__list {
    margin: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  &__item {
    margin: 0 1rem;
    a {
      color: $white-color;
      font-size: 3rem;
      font-family: "Pangolin", cursive;
      transition: 0.4s ease;
      letter-spacing: 0.3rem;
    }

    a:hover {
      text-decoration: none;
      opacity: 0.8;
    }
  }
}
</style>