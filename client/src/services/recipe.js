import api from "./api";

export const addRecipe = async (recipeData) => {
  return api.post("/recipe", recipeData, { withCredentials: true });
};

export const editRecipe = async (id, recipeData) => {
  return api.put(`/recipe/${id}`, recipeData, { withCredentials: true });
};

export const getAllRecipes = async () => {
  return api.get("/recipe");
};

export const getRecipeById = async (id) => {
  return api.get(`/recipe/${id}`);
};

export const deleteRecipe = async (id) => {
  return api.delete(`/recipe/${id}`, { withCredentials: true });
};
