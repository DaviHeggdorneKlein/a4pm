import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import AddRecipeView from "../views/AddRecipeView.vue";
import EditRecipeView from "../views/EditRecipeView.vue";
import ShowRecipeView from "../views/ShowRecipeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/receita/adicionar",
    name: "AddRecipeView",
    component: AddRecipeView,
  },
  {
    path: "/receita/editar",
    name: "EditRecipeView",
    component: EditRecipeView,
  },
  {
    path: "/receita",
    name: "ShowRecipeView",
    component: ShowRecipeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
