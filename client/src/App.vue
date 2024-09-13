<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  font-family: "Poppins", system-ui;
}

body {
  margin: 0;
}
</style>
