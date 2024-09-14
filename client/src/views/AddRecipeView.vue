<template>
  <div class="AddRecipe">
    <RecipeForm />
  </div>
</template>

<script>
import RecipeForm from "@/components/RecipeForm.vue";

export default {
  name: "AddRecipeView",
  components: {
    RecipeForm,
  },
};
</script>
