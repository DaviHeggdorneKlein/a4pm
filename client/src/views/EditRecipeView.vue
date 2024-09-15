<template>
  <div class="EditRecipe">
    <RecipeForm :user-id="userId" :recipe="recipeData" />
  </div>
</template>

<script>
import RecipeForm from "@/components/RecipeForm.vue";
import { getUserInfo } from "@/services/user";
import { getRecipeById } from "@/services/recipe";

export default {
  name: "EditRecipeView",
  components: {
    RecipeForm,
  },
  data() {
    return {
      userId: null,
      recipeData: null,
    };
  },
  async created() {
    try {
      const userInfo = await getUserInfo();
      this.userId = userInfo.id;
      const recipeId = this.$route.query.id;

      if (!recipeId) {
        this.$router.push("/");
      }
      const recipe = await getRecipeById(recipeId);
      this.recipeData = recipe.data;
      if (this.recipeData.id_usuarios !== this.userId) {
        this.$router.push("/");
        return;
      }
    } catch (error) {
      this.$router.push("/");
    }
  },
};
</script>
