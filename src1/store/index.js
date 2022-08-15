import { createStore } from "vuex";
import api from "../../api/products";
export default createStore({
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
    getProductsList({ state, commit }) {
      return api.getProductsList().then((resolve) => {
        commit("setProducts", resolve);
      });
    },
  },
  modules: {},
});
