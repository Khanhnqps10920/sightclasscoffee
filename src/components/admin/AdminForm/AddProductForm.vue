<template>
  <form class="admin-form">
    <div class="admin-form__control">
      <label for="name" class="admin-form__control-label">Product Name</label>

      <input type="text" v-model="product.name" name="name" placeholder="coffee name" />
    </div>

    <div class="admin-form__control">
      <label for="price" class="admin-form__control-label">Product Price</label>

      <input
        type="number"
        name="price"
        v-model="product.price"
        class="small"
        placeholder="coffee price"
      />
    </div>

    <div class="admin-form__control">
      <label for="ingredient" class="admin-form__control-label">Description</label>

      <textarea
        type="text"
        name="ingredient"
        v-model="product.description"
        class="small"
        placeholder="Description"
      />
    </div>

    <div class="admin-form__control">
      <label for="category">Category</label>

      <b-form-select :options="categoryOptions" v-model="product.categories"></b-form-select>
    </div>

    <div class="admin-form__control" v-if="isCoffee">
      <label for="category">Coffee Category</label>

      <b-form-select :options="coffeeCategoryOptions" v-model="product.coffeeCategories"></b-form-select>
    </div>

    <div class="admin-form__control" v-for="(ingredient,index) in ingredients" :key="index">
      <label for="ingredient" class="admin-form__control-label">Ingredient</label>

      <input
        type="text"
        name="ingredient"
        @keyup.tab.prevent="handleAddIngredient"
        class="small"
        placeholder="tab to add ingredient"
      />
    </div>

    <div class="admin-form__control" v-if="isCoffee">
      <label for="ingredient" class="admin-form__control-label">Ingredient</label>

      <input
        type="text"
        name="ingredient"
        v-model="otherIngredients"
        @keydown.tab.prevent="handleAddIngredient"
        class="small"
        placeholder="tab to add ingredient"
      />
    </div>

    <div class="admin-form__file">
      <label class="admin-form__file-label" for="file">Product Img</label>
      <!-- Styled -->
      <b-form-file
        class="admin-form__file-inputs"
        v-model="product.file"
        :state="Boolean(product.file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
    </div>
    <p class="text-danger" v-if="error">{{ error }}</p>

    <button>Add Product</button>
  </form>
</template>

<script>
// libs
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("apis", ["categories", "coffeeCategories"]),

    categoryOptions() {
      const categoryOptions = this.categories.map(category => ({
        value: category.id,
        text: category.name
      }));
      categoryOptions.unshift({ value: null, text: "Please select an option" });

      return categoryOptions;
    },

    coffeeCategoryOptions() {
      const coffeeCategoryOptions = this.coffeeCategories.map(category => ({
        value: category.id,
        text: category.name
      }));
      coffeeCategoryOptions.unshift({
        value: null,
        text: "Please select an option"
      });

      return coffeeCategoryOptions;
    }
  },

  watch: {
    "product.categories": function(val) {
      const categoryIndex = this.categories.findIndex(
        category => category.id === val
      );

      if (this.categories[categoryIndex].name === "coffee")
        this.isCoffee = true;
      else this.isCoffee = false;
    }
  },

  data() {
    return {
      ingredients: [],
      otherIngredients: null,
      error: null,

      product: {
        categories: null,
        coffeeCategories: null,
        name: null,
        price: null,
        description: null,
        file: null
      },
      isCoffee: false
    };
  },

  methods: {
    handleAddIngredient() {
      console.log("1111");
      if (this.otherIngredients) {
        this.error = null;
        this.ingredients.push(this.otherIngredients);
        this.otherIngredients = null;
      } else {
        this.error = "Ingredient cant be empty";
      }
    }
  }
};
</script>

<style>
</style>