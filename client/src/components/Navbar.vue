<template>
  <nav class="navbar">
    <div class="links-wrapper">
      <router-link class="nav-link" to="/">Home</router-link>
    </div>
    <div class="login-wrapper">
      <router-link v-if="isLoggedIn" class="nav-link" to="/receita/adicionar">
        Adicionar Receita
      </router-link>
      <router-link v-if="!isLoggedIn" class="nav-link" to="/login">
        Entrar
      </router-link>
      <a v-else class="nav-link" href="#" @click.prevent="handleLogout">
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
}

.login-wrapper {
  padding: 0 2rem;
}
</style>
