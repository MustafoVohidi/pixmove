<template>
  <div class="product_item">
    <p class="card-title">{{ product.title }}</p>
    <img class="card-image" :src="product.image" alt="" />
    <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>
    <div>
      <input v-model="amount" type="number" :id="product.id" />
      <span>кг</span>
    </div>
    <button @click="addToCart(product)">В корзину</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {
      amount: 0,
    };
  },
  computed: {
    ...mapState({
      currency: (state) => state.currency,
    }),
  },
  methods: {
    addToCart() {
      this.product.amount = this.amount;
      this.$emit("addProduct", this.product);
      this.amount = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-image {
  width: 100%;
}
button {
  padding: 5px;
  margin: 5px;
}
</style>
