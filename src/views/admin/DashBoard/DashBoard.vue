<template>
  <div class="dashboard">
    <AdminTable title="Categories" :items="categories" />

    <AdminTable title="Coffee Categories" :items="coffeeCategories" />
  </div>
</template>

<script>
// libs
import { mapState, mapActions } from "vuex";

import AdminTable from "../../../components/admin/AdminTable/AdminTable.vue";

export default {
  computed: {
    ...mapState("apis", ["categories", "coffeeCategories"])
  },

  methods: {
    ...mapActions("apis", ["getCategories", "getCoffeeCategories"])
  },

  components: {
    AdminTable
  },

  created() {
    this.getCategories();
    this.getCoffeeCategories();
  }
};
</script>

<style>
</style>