<template>
  <section class="form-wrapper">
    <h2 class="form-title">
      {{ isEditing ? "Editar Receita" : "Nova Receita" }}
    </h2>
    <form class="recipe-form" @submit.prevent="submitForm">
      <input
        class="form-input"
        v-model="nome"
        placeholder="Nome da Receita"
        required
      />
      <input
        class="form-input"
        type="text"
        v-model="tempo_preparo_minutos"
        placeholder="Tempo de Preparo em Minutos"
        @input="validateNumber('tempo_preparo_minutos')"
        required
      />
      <input
        class="form-input"
        type="text"
        v-model="porcoes"
        placeholder="Porções"
        @input="validateNumber('porcoes')"
        required
      />
      <textarea
        class="form-input text-area"
        v-model="ingredientes"
        placeholder="Ingredientes"
        required
      ></textarea>
      <textarea
        class="form-input text-area"
        v-model="modo_preparo"
        placeholder="Modo de Preparo"
        required
      ></textarea>
      <select class="form-input" v-model="id_categorias" required>
        <option disabled value="">Selecione uma Categoria</option>
        <option
          v-for="categoria in categorias"
          :key="categoria.id"
          :value="categoria.id"
        >
          {{ categoria.nome }}
        </option>
      </select>
      <button class="form-submit-button" type="submit">
        {{ isEditing ? "Salvar Alterações" : "Adicionar Receita" }}
      </button>
    </form>
  </section>
</template>

<script>
import { addRecipe, editRecipe } from "@/services/recipe";
import { getCategories } from "@/services/category";

export default {
  name: "RecipeForm",
  props: {
    userId: {
      type: Number,
      required: true,
    },
    recipe: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isEditing: false,
      id_categorias: "",
      nome: "",
      tempo_preparo_minutos: "",
      porcoes: "",
      ingredientes: "",
      modo_preparo: "",
      categorias: [],
    };
  },
  async mounted() {
    console.log(this.recipe);
    this.categorias = await getCategories();
    if (this.recipe) {
      this.isEditing = true;
      this.loadRecipeData();
    }
  },
  watch: {
    recipe: {
      immediate: true,
      handler(newRecipe) {
        if (newRecipe) {
          this.isEditing = true;
          this.loadRecipeData();
        }
      },
    },
  },
  methods: {
    loadRecipeData() {
      const recipe = this.recipe;
      this.id_categorias = recipe.Categorium.id;
      this.nome = recipe.nome;
      this.tempo_preparo_minutos = recipe.tempo_preparo_minutos;
      this.porcoes = recipe.porcoes;
      this.ingredientes = recipe.ingredientes;
      this.modo_preparo = recipe.modo_preparo;
    },
    validateNumber(field) {
      const input = this[field];
      this[field] = input.replace(/[^0-9]/g, "");
    },
    async submitForm() {
      const recipeData = {
        id_categorias: this.id_categorias,
        nome: this.nome,
        tempo_preparo_minutos: this.tempo_preparo_minutos,
        porcoes: this.porcoes,
        ingredientes: this.ingredientes,
        modo_preparo: this.modo_preparo,
        id_usuarios: this.userId,
      };

      if (this.isEditing) {
        await editRecipe(this.recipe.id, recipeData);
      } else {
        await addRecipe(recipeData);
      }
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 460px;
  margin: 5rem auto;
  text-align: center;
  border: 3px solid #2a4275;
  border-radius: 16px;
  padding: 2rem;
}

.recipe-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-title {
  font-weight: 600;
  font-size: 32px;
  color: #000;
  margin: 0;
}

.form-input {
  padding: 0.75rem 0.5rem;
}

.form-submit-button {
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  padding: 9px;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(38, 51, 97, 1) 0%,
    rgba(65, 143, 222, 1) 79%
  );
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.form-submit-button:hover {
  opacity: 0.9;
}

.toggle-form-link {
  color: #2a4275;
  text-decoration: underline;
  cursor: pointer;
}

.text-area {
  resize: none;
}

@media (max-width: 680px) {
  .form-wrapper {
    width: calc(100% - 8rem);
  }

  .form-title {
    font-size: 24px;
  }

  .form-submit-button {
    font-size: 16px;
  }
}
</style>
