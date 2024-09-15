<template>
  <div class="recipe-view">
    <RecipeDetail v-if="recipe" :recipe="recipe" />
    <div v-if="loading">Carregando...</div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import { getRecipeById } from "@/services/recipe";
import RecipeDetail from "@/components/RecipeDetail.vue";

export default {
  name: "ShowRecipeView",
  components: {
    RecipeDetail,
  },
  data() {
    return {
      recipe: null,
      loading: true,
      error: null,
    };
  },
  async created() {
    const recipeId = this.$route.query.id;

    if (!recipeId) {
      this.$router.push("/");
      return;
    }

    try {
      const response = await getRecipeById(recipeId);
      this.recipe = response.data;
    } catch (error) {
      this.error = "Erro ao carregar receita.";
      console.error("Erro ao carregar receita:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.recipe-view {
  padding: 2rem;
}

.error {
  color: red;
}
</style>
