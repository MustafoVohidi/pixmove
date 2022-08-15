import api from "../../api/products.js";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    cart: [],
    cartPrice: [0],
    currency: "VGTB",
    products: [],
    allAmount: 0,
  }),
  getters: {
    cardsWidth(state) {
      let width = window.innerWidth;
      let count = 1;
      if (width > "840px") {
        count = 3;
      } else if (width > "420px" && width < "840px") {
        count = 2;
      }
      return 100 / count;
    },
    spisok_dlya_rendera(state) {
      return state.cart.reverse();
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setAmount(state, amount) {
      state.amount = amount;
    },
    setCartPrice(state, cartPrice) {
      state.cartPrice = cartPrice;
    },
  },
  actions: {
    getProductsList(ctx, data) {
      return api.getProductsList();
    },
  },
  modules: {},

  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  //   getProductsList(ctx, data) {
  //     return api.getProductsList();
  //   },
  // },
  // modules: {
  // }
});