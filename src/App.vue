<template>
  <div id="app">
    <Header />
    <List />
    <Cart />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Cart from "./components/Cart.vue";
export default {
  name: "App",
  data() {
    return {
      cart: [1],
      products: [10, 20],
      currency: "VGTB",
    };
  },
  components: {
    Header,
    List,
    Cart,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
