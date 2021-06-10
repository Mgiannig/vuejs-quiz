<template>
  <div id="app">
    <Header :totalAnswered="0" :correctAnswered="0" />

    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <b-container id="app-container">
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
#app-container {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
