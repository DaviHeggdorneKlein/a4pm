<template>
  <div :class="{ home: true, 'home-full-width': !userInfo }">
    <UserRecipes v-if="userInfo" :recipes="userRecipes" />
    <SiteRecipes :recipes="allRecipes" />
  </div>
</template>

<script>
import SiteRecipes from "@/components/SiteRecipes.vue";
import UserRecipes from "@/components/UserRecipes.vue";
import { getAllRecipes } from "@/services/recipe";
import { getUserInfo } from "@/services/user";

export default {
  name: "HomeView",
  components: {
    UserRecipes,
    SiteRecipes,
  },
  data() {
    return {
      allRecipes: [],
      userRecipes: [],
      userInfo: null,
    };
  },
  async created() {
    try {
      const recipeResponse = await getAllRecipes();
      this.allRecipes = recipeResponse.data;
    } catch (error) {
      console.error("Erro ao carregar as receitas:", error);
    }
    try {
      const userInfo = await getUserInfo();
      this.userInfo = userInfo;
      const recipes = this.allRecipes;
      this.userRecipes = recipes.filter(
        (recipe) => recipe.id_usuarios === this.userInfo.id
      );
    } catch (error) {
      console.error("Erro ao encontrar usuario:", error);
    }
  },
};
</script>

<style>
.home {
  display: grid;
  gap: 2rem;
  grid-template-columns: 30% 70%;
  padding: 4rem 2rem 0;
  width: calc(100% - 6rem);
}

.home-full-width {
  grid-template-columns: 1fr;
}

.home .site-recipes {
  width: 100%;
}

.recipes-list {
  scrollbar-width: thin;
  scrollbar-color: rgba(38, 51, 97, 1) rgba(65, 143, 222, 1);
}

.recipes-list::-webkit-scrollbar {
  width: 12px;
}

.recipes-list::-webkit-scrollbar-track {
  background: rgba(65, 143, 222, 1);
}

.recipes-list::-webkit-scrollbar-thumb {
  background: rgba(38, 51, 97, 1);
  border-radius: 6px;
}
.recipes-list::-webkit-scrollbar-thumb:hover {
  background: rgba(28, 40, 80, 1); /* Cor mais escura ao passar o mouse */
}

@media (max-width: 1280px) {
  .home {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: calc(100% - 4rem) !important;
  }
}
</style>
