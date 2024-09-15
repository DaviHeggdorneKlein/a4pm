<template>
  <section class="recipes-wrapper">
    <h2 class="recipes-title">Minhas Receitas</h2>
    <div class="recipes-search-wrapper">
      <input
        class="filter-input"
        v-model="searchQuery"
        placeholder="Filtrar receitas pelo nome"
      />

      <ul class="recipes-list">
        <li
          v-for="recipe in filteredRecipes"
          :key="recipe.id"
          class="recipe-item"
        >
          {{ recipe.nome }}
          <div class="recipe-actions">
            <button @click="editRecipe(recipe.id)" class="edit-recipe-btn">
              Editar
            </button>
            <button @click="delRecipe(recipe.id)" class="delete-recipe-btn">
              Excluir
            </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { deleteRecipe } from "../services/recipe";

export default {
  name: "UserRecipes",
  props: {
    recipes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    filteredRecipes() {
      return this.recipes
        .filter(
          (recipe) =>
            recipe.nome &&
            recipe.nome.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
        .sort((a, b) => a.nome.localeCompare(b.nome));
    },
  },
  methods: {
    editRecipe(recipeId) {
      this.$router.push(`/receita/editar?id=${recipeId}`);
    },
    async delRecipe(recipeId) {
      if (confirm("Tem certeza que deseja excluir essa receita?")) {
        await deleteRecipe(recipeId);
        location.reload();
      }
    },
  },
};
</script>

<style scoped>
.recipes-wrapper {
  border: 3px solid #2a4275;
  border-radius: 16px;
  max-height: 800px;
  height: fit-content;
}

.recipes-search-wrapper {
  padding: 1rem;
}

.recipes-title {
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  padding: 1rem;
  margin: 0 0 1rem 0;
  border-radius: 12px 12px 0 0;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(38, 51, 97, 1) 0%,
    rgba(65, 143, 222, 1) 79%
  );
}

.filter-input {
  padding: 0.75rem;
  width: calc(100% - 28px);
  font-size: 16px;
  margin: 0;
}

.recipes-list {
  list-style-type: none;
  padding: 0;
}

.recipe-item {
  font-size: 20px;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.recipe-actions {
  display: flex;
  gap: 10px;
}

.edit-recipe-btn,
.delete-recipe-btn {
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.edit-recipe-btn {
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(38, 51, 97, 1) 0%,
    rgba(65, 143, 222, 1) 79%
  );
}

.delete-recipe-btn {
  background-image: radial-gradient(
    circle farthest-corner at 17.1% 22.8%,
    rgba(226, 24, 24, 1) 0%,
    rgba(160, 6, 6, 1) 90%
  );
}

.edit-recipe-btn:hover,
.delete-recipe-btn:hover {
  opacity: 0.9;
}
</style>
