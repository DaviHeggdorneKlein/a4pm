<template>
  <div class="home">
    <UserRecipes />
    <SiteRecipes />
  </div>
</template>

<script>
import SiteRecipes from "@/components/SiteRecipes.vue";
import UserRecipes from "@/components/UserRecipes.vue";

export default {
  name: "HomeView",
  components: {
    UserRecipes,
    SiteRecipes,
  },
};
</script>

<style scoped>
.home {
  width: calc(100% - 6rem);
  display: grid;
  gap: 2rem;
  grid-template-columns: 30% 70%;
  padding: 4rem 2rem 0;
}
</style>
