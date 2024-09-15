<template>
  <nav class="navbar">
    <div class="links-wrapper">
      <router-link class="nav-link" to="/">Home</router-link>
    </div>
    <div class="login-wrapper">
      <router-link
        v-if="isLoggedIn"
        class="nav-link add-recipe-button"
        to="/receita/adicionar"
      >
        Nova Receita
      </router-link>
      <router-link v-if="!isLoggedIn" class="nav-link login-button" to="/login">
        Entrar
      </router-link>
      <a
        v-else
        class="nav-link logout-button"
        href="#"
        @click.prevent="handleLogout"
      >
        Sair
      </a>
    </div>
  </nav>
</template>

<script>
import { getUserInfo, logoutUser } from "../services/user";

export default {
  name: "NavbarComponent",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  async created() {
    await this.checkLoginStatus();
  },
  watch: {
    $route() {
      this.checkLoginStatus();
    },
  },
  methods: {
    async checkLoginStatus() {
      try {
        const user = await getUserInfo();
        this.isLoggedIn = !!user;
      } catch (error) {
        this.isLoggedIn = false;
      }
    },
    async handleLogout() {
      try {
        await logoutUser();
        this.isLoggedIn = false;
        this.$router.push("/login");
      } catch (error) {
        console.error("Erro ao fazer logout:", error);
      }
    },
  },
};
</script>

<style scoped>
.nav-link {
  color: #fff;
  text-decoration: none;
}

.navbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 0;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(38, 51, 97, 1) 0%,
    rgba(65, 143, 222, 1) 79%
  );
}

.links-wrapper {
  padding: 0 2rem;
  align-content: center;
}

.login-wrapper {
  display: flex;
  gap: 1rem;
  padding: 0 2rem;
}

.logout-button {
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  background-image: radial-gradient(
    circle farthest-corner at 17.1% 22.8%,
    rgba(226, 24, 24, 1) 0%,
    rgba(160, 6, 6, 1) 90%
  );
}

.logout-button:hover,
.add-recipe-button:hover,
.login-button:hover {
  opacity: 0.9;
}

.add-recipe-button {
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(14, 174, 87, 1) 0%,
    rgba(12, 116, 117, 1) 90%
  );
}

.login-button {
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(14, 174, 87, 1) 0%,
    rgba(12, 116, 117, 1) 90%
  );
}

@media (max-width: 480px) {
  .links-wrapper,
  .nav-link {
    font-size: 14px;
  }

  .logout-button,
  .add-recipe-button,
  .login-button {
    padding: 0.25rem 0.5rem;
    align-content: center;
    text-align: center;
  }
}
</style>
