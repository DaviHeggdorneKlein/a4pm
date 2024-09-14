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

<style scoped>
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
</style>
