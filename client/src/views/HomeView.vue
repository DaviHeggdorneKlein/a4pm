<template>
  <div class="home">
    <UserRecipes />
  </div>
</template>

<script>
import UserRecipes from "@/components/UserRecipes.vue";

export default {
  name: "HomeView",
  components: {
    UserRecipes,
  },
};
</script>
