<template>
  <div class="dashboard">
    <AdminTable title="Categories" :items="categories" />

    <AdminTable title="Coffee Categories" :items="coffeeCategories" />

    <AdminTable title="Products" :items="products" />
  </div>
</template>

<script>
// libs
import { mapState, mapActions } from "vuex";

import AdminTable from "../../../components/admin/AdminTable/AdminTable.vue";

export default {
  computed: {
    ...mapState("apis", ["categories", "coffeeCategories", "products"])
  },

  methods: {
    ...mapActions("apis", [
      "getCategories",
      "getCoffeeCategories",
      "getProducts"
    ])
  },

  components: {
    AdminTable
  },

  created() {
    this.getCategories();
    this.getCoffeeCategories();
    this.getProducts();
  }
};
</script>

<style>
</style>