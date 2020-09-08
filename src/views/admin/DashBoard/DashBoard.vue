<template>
  <div class="dashboard">
    <AdminTable />

    <AdminTable />
  </div>
</template>

<script>
import AdminTable from "../../../components/admin/AdminTable/AdminTable.vue";

export default {
  components: {
    AdminTable
  }
};
</script>

<style>
</style>