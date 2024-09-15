<template>
  <div class="recipe-card">
    <h1 class="recipe-title">{{ recipe.nome }}</h1>
    <div class="info-grid">
      <div class="info-item">
        <strong>Autor:</strong> {{ recipe.Usuario.nome }}
      </div>
      <div class="info-item">
        <strong>Tempo de Preparo:</strong>
        {{ recipe.tempo_preparo_minutos }} minutos
      </div>
      <div class="info-item">
        <strong>Porções:</strong> {{ recipe.porcoes }}
      </div>
      <div class="info-item">
        <strong>Categoria:</strong> {{ recipe.Categorium.nome }}
      </div>
    </div>
    <div class="details">
      <p><strong>Ingredientes:</strong> {{ recipe.ingredientes }}</p>
      <p><strong>Modo de Preparo:</strong> {{ recipe.modo_preparo }}</p>
    </div>
    <div class="button-container">
      <button @click="printRecipe" class="print-button">Imprimir</button>
      <router-link to="/" class="back-button">Voltar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeDetail",
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  methods: {
    printRecipe() {
      window.print();
    },
  },
};
</script>

<style scoped>
.recipe-card {
  border: 3px solid #2a4275;
  border-radius: 16px;
  padding: 1rem;
  background-color: #f9f9f9;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.recipe-title {
  margin: 0;
  font-size: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
  margin: 1rem 0;
}

.info-item {
  text-align: left;
}

.details {
  text-align: left;
  margin: 1rem 0;
}

.details p {
  margin: 0.5rem 0;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.back-button,
.print-button {
  padding: 0.5rem 0;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 16px;
  text-decoration: none;
  width: 150px;
}

.back-button {
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(38, 51, 97, 1) 0%,
    rgba(65, 143, 222, 1) 79%
  );
}

.print-button {
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(14, 174, 87, 1) 0%,
    rgba(12, 116, 117, 1) 90%
  );
}

.back-button:hover,
.print-button:hover {
  opacity: 1;
}
</style>
