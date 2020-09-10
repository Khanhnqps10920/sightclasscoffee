<template>
  <div class="add-product">
    <h1 class="page-title">Add Product</h1>

    <AddProductForm />
  </div>
</template>

<script>
import AddProductForm from "../../../components/admin/AdminForm/AddProductForm.vue";

export default {
  components: {
    AddProductForm
  }
};
</script>

<style>
</style>