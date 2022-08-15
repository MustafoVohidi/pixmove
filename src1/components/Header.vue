<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "Header",
  data() {
    return {};
  },
  watch: {
    ...mapState({
      currency: (state) => state.currency,
      cart: (state) => state.cart,
    }),
  },
};
</script>

<style scoped>
.header {
  padding: 10px;
  background: #e5e5e5;
}
</style>

<template>
  <div class="header">
    <h3>
      Товаров в корзине на: {{ Math.round($store.state.cartPrice[0]) }}
      {{ currency }}
    </h3>
  </div>
</template>
