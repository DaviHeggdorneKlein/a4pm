<template>
  <div class="AddRecipe">
    <RecipeForm :user-id="userId" />
  </div>
</template>

<script>
import RecipeForm from "@/components/RecipeForm.vue";
import { getUserInfo } from "@/services/user";

export default {
  name: "AddRecipeView",
  components: {
    RecipeForm,
  },
  data() {
    return {
      userId: null,
    };
  },
  async created() {
    try {
      const userInfo = await getUserInfo();
      this.userId = userInfo.id;
    } catch (error) {
      this.$router.push("/");
    }
  },
};
</script>
