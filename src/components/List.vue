<template>
  <div class="product-list">
    <ProductItem
      class="card"
      v-for="product in products"
      :product="product"
      :style="{ width: cardsWidth + '%' }"
      :key="product.id"
      @addProduct="addToCart"
    />
  </div>
  <div class="warning" v-if="isAmountZero">Выберите количество</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import ProductItem from "./ProductItem";
export default {
  components: { ProductItem },
  data() {
    return {
      isAmountZero: false,
    };
  },
  computed: {
    ...mapGetters({
      cardsWidth: "cardsWidth",
    }),
    ...mapState({
      products: (state) => state.products,
      currency: (state) => state.currency,
      cartPrice: (state) => state.cartPrice,
      cart: (state) => state.cart,
    }),
  },
  methods: {
    ...mapActions({
      getProductsList: "getProductsList",
    }),
    ...mapMutations({
      setProducts: "setProducts",
      setAmount: "setAmount",
    }),

    addToCart(product) {
      let isProductInCart = false;
      let ind;
      this.cart.find((item, index) => {
        if (item.id == product.id) {
          ind = index;
          isProductInCart = true;
        }
      });
      if (product.amount <= 0) {
        this.isAmountZero = true;
        setTimeout(() => {
          this.isAmountZero = false;
        }, 3000);
      } else {
        if (isProductInCart) {
          this.cart[ind].amount += product.amount;
        } else {
          this.cart.push(product);
        }
      }

      let val = 0;
      this.cart.forEach((item) => {
        val += item.price * item.amount;
      });
      console.log(this.cartPrice, val)
      this.cartPrice[0] = val;
    },
  },
  created() {
    this.getProductsList();
  },
};
</script>

<style>
.product-list {
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: start;
}

.card {
  display: inline-block;
  width: 25%;
  border: 1px solid #908888;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}
.warning {
  text-align: center;
  color: red;
}
</style>
