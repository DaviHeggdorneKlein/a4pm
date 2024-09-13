<template>
  <section class="form-wrapper">
    <h2 class="form-title">{{ isCadastro ? "Cadastro" : "Login" }}</h2>
    <form class="user-form" @submit.prevent="submitForm">
      <input
        v-if="isCadastro"
        class="form-input"
        v-model="nome"
        placeholder="Nome"
        required
      />
      <input class="form-input" v-model="login" placeholder="Login" required />
      <input
        class="form-input"
        v-model="senha"
        type="password"
        placeholder="Senha"
        required
      />
      <button class="form-submit-button" type="submit">
        {{ isCadastro ? "Registrar" : "Entrar" }}
      </button>
      <a class="toggle-form-link" href="#" @click.prevent="toggleForm">
        {{
          isCadastro
            ? "Já tem uma conta? Faça login"
            : "Ainda não tem conta? Registre-se agora!"
        }}
      </a>
    </form>
  </section>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      isCadastro: false,
      nome: "",
      login: "",
      senha: "",
    };
  },
  methods: {
    toggleForm() {
      this.isCadastro = !this.isCadastro;
      if (!this.isCadastro) {
        this.nome = "";
      }
    },
    submitForm() {
      if (this.isCadastro) {
        console.log("Cadastrando", this.nome, this.login, this.senha);
      } else {
        console.log("Logando", this.login, this.senha);
      }
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 460px;
  margin: 5rem auto;
  text-align: center;
  border: 3px solid #2a4275;
  border-radius: 16px;
  padding: 2rem;
}

.user-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-title {
  font-weight: 600;
  font-size: 32px;
  color: #000;
  margin: 0;
}

.form-input {
  padding: 0.75rem 0.5rem;
}

.form-submit-button {
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  padding: 9px;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(38, 51, 97, 1) 0%,
    rgba(65, 143, 222, 1) 79%
  );
  border: none;
  cursor: pointer;
}

.toggle-form-link {
  color: #2a4275;
  text-decoration: underline;
  cursor: pointer;
}
</style>
