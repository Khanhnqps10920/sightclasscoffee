<template>
  <b-sidebar id="sidebar-backdrop" class="cart-side-bar" title="Your Cart" backdrop right shadow>
    <div class="px-3 py-2 cart-items"></div>
  </b-sidebar>
</template>

<script>
export default {};
</script>

<style lang="scss" >
@import "../../assets/scss/variable.scss";

.b-sidebar.b-sidebar-right {
  transition: 0.4s ease !important;
  background-color: #eceae7 !important;

  .b-sidebar-header {
    border-bottom: 0.1rem solid #d6c9c3;
  }

  .cart-items {
    height: 70%;
    overflow-y: hidden;

    border-bottom: 0.1rem solid #d6c9c3;
  }

  strong {
    color: $base-color;
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
}
</style>