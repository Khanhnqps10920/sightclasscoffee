<template>
  <div class="dashboard">
    <AdminTable title="Categories" :items="categories" />

    <AdminTable title="Coffee Categories" :items="coffeeCategories" />

    <AdminTable title="Products" :items="products" />
  </div>
</template>

<script>
// libs
import { mapState } from "vuex";

import AdminTable from "../../../components/admin/AdminTable/AdminTable.vue";

export default {
  computed: {
    ...mapState("apis", ["categories", "coffeeCategories", "products"])
  },

  methods: {},

  components: {
    AdminTable
  },

  created() {}
};
</script>

<style>
</style>