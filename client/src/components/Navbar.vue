<template>
  <nav class="navbar">
    <div class="links-wrapper">
      <router-link class="nav-link" to="/">Home</router-link>
    </div>
    <div class="login-wrapper">
      <router-link class="nav-link" to="/login">Entrar</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
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
