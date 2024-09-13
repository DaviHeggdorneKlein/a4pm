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
          {{ recipe.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserRecipes",
  data() {
    return {
      recipes: [],
      searchQuery: "",
    };
  },
  computed: {
    filteredRecipes() {
      return this.recipes
        .filter((recipe) =>
          recipe.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));
    },
  },
  mounted() {
    this.loadRecipes();
  },
  methods: {
    loadRecipes() {
      this.recipes = [
        { id: 1, name: "Bolo de Chocolate" },
        { id: 2, name: "Torta de Maçã" },
        { id: 3, name: "Pão de Queijo" },
        { id: 4, name: "Lasanha" },
        { id: 5, name: "Pizza Caseira" },
      ];
    },
  },
};
</script>

<style scoped>
.recipes-wrapper {
  width: 30%;
  border: 3px solid #2a4275;
  border-radius: 16px;
  margin: 4rem 2rem 0;
  max-height: 800px;
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
}
</style>
