<template>
  <div class="add-category">
    <h1 class="page-title">Add Category</h1>

    <AddCategoryForm />
  </div>
</template>

<script>
import AddCategoryForm from "../../../components/admin/AdminForm/AddCategoryForm.vue";

export default {
  components: {
    AddCategoryForm
  }
};
</script>

<style lang="scss" scoped>
</style>