<template>
  <div>
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
  </div>
</template>

<script>
import ProductItem from "./ProductItem";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: { ProductItem },
  data() {
    return {
      isAmountZero: false,
      products: [],
    };
  },
  computed: {
    cardsWidth() {
      let width = window.innerWidth;
      let count = 1;
      if (width > "840px") {
        count = 3;
      } else if (width > "420px" && width < "840px") {
        count = 2;
      }
      // console.log(width);
      return 100 / count;
    },
    ...mapGetters({
      cardsWidth: "cardsWidth",
    }),
    ...mapState({
      currency: (state) => state.currency,
      cartPrice: (state) => state.cartPrice,
      cart: (state) => state.cart,
    }),
  },

  methods: {
    ...mapMutations({
      setProducts: "setProducts",
      setAmount: "setAmount",
    }),

    startPricesMonitoring() {
      setInterval(this.getList, 1000);
    },
    async getList() {
      let data = await this.$store.dispatch("getProductsList");
      this.products = data;
    },

    addToCart(product) {
      let isProductInCart = false;
      let ind;
       console.log(this.cart, "cart");
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
        }, 2000);
      } else {
        if (isProductInCart) {
          this.cart[ind].amount +=product.amount;
        } else {
          this.cart.push(product);
        }
      }

      let val = 0;
      this.cart.forEach((item) => {
        val +=item.price* item.amount;
      });

      this.cartPrice[0] = val;
      // console.log(this.cartPrice, val);
    },
  },
  created() {
    this.startPricesMonitoring();
  },
};
</script>

<style>
.card-image {
  width: 100%;
}
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
