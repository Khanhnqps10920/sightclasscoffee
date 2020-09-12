<template>
  <form @submit.prevent="handleAddProduct" class="admin-form">
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

      <b-form-select :options="coffeeCategoryOptions" v-model="coffeeCat"></b-form-select>
    </div>

    <div v-if="isCoffee">
      <div class="admin-form__control" v-for="(ingredient,index) in ingredients" :key="index">
        <label for="ingredient" class="admin-form__control-label">Ingredient</label>

        <input type="text" class="small" v-model=" ingredients[index]" />
      </div>
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
        accept="image/*"
        v-model="file"
        :state="Boolean(file)"
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
import firebase from "firebase";
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
      if (!val) return;

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
      coffeeCat: null,
      file: null,

      product: {
        categories: null,
        name: null,
        price: null,
        description: null
      },
      isCoffee: false
    };
  },

  methods: {
    handleAddIngredient() {
      if (this.otherIngredients) {
        this.error = null;
        this.ingredients.push(this.otherIngredients);
        this.otherIngredients = null;
      } else {
        this.error = "Ingredient cant be empty";
      }
    },

    testUpdate() {
      firebase
        .storage()
        .ref(this.product.file.name)
        .put(this.product.file)
        .then(snapshot => {
          console.log(snapshot, "success");
        })
        .catch(e => {
          console.log(e);
        });
      console.log("test update");
    },

    handleAddProduct() {
      const { categories, name, price, description } = this.product;
      // check null
      if (categories && name && price && description && this.file) {
        // check if coffee
        if (this.isCoffee) {
          // check if coffee category not null
          if (!this.coffeeCat) {
            this.error =
              "Field cant be empty and please make sure that u selected one categories";
          } else {
            this.error = null;
            const newProduct = {
              ...this.product,
              ingredients: this.ingredients,
              coffeeCategories: this.coffeeCat
            };

            console.log(newProduct);
          }
        }
        // normal product
        else {
          this.error = null;
          const newProduct = {
            ...this.product
          };

          console.log(newProduct);
        }

        // if not coffee
      } else {
        this.error =
          "Field cant be empty and please make sure that u selected one categories and have a product img";
      }
    }
  },

  created() {
    // const storageRef = firebase
    //   .storage()
    //   .ref()
    //   .child("v.jpg");
    // storageRef
    //   .getDownloadURL()
    //   .then(url => {
    //     console.log(url, "url");
    //   })
    //   .catch(e => console.log(e));
  }
};
</script>

<style>
</style>