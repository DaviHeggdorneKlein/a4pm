<template>
  <section class="recipes-wrapper">
    <h2 class="recipes-title">Todas as Receitas</h2>
    <!-- Input de filtro -->
    <div class="recipes-search-wrapper">
      <input
        class="filter-input"
        v-model="searchQuery"
        placeholder="Filtrar receitas pelo nome"
      />

      <!-- Lista de receitas -->
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
  name: "SiteRecipes",
  data() {
    return {
      recipes: [], // Armazena todas as receitas
      searchQuery: "", // Consulta de pesquisa para filtrar receitas
    };
  },
  computed: {
    // Retorna as receitas filtradas e ordenadas em ordem alfabética
    filteredRecipes() {
      return this.recipes
        .filter((recipe) =>
          recipe.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name)); // Ordena alfabeticamente
    },
  },
  mounted() {
    // Simulando uma chamada API para carregar todas as receitas
    this.loadRecipes();
  },
  methods: {
    loadRecipes() {
      // Simula o carregamento de receitas do servidor (substitua por sua API)
      this.recipes = [
        { id: 1, name: "Bolo de Cenoura" },
        { id: 2, name: "Frango Xadrez" },
        { id: 3, name: "Pão de Alho" },
        { id: 4, name: "Macarrão à Bolonhesa" },
        { id: 5, name: "Sopa de Lentilha" },
        { id: 6, name: "Pudim de Leite" },
      ];
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
}
</style>
