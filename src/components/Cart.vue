<template>
  <div class="cart-list">
    <h3>Корзина</h3>
    <div v-for="item in spisok_dlya_rendera" class="product-item">
      <div class="title">
        <span class="bold">Товар: </span> {{ item.title }}
      </div>
      <div class="amount">
        <span class="bold">Кол-во: </span> {{ item.amount }}
      </div>
      <div class="price"><span class="bold">Цена: </span> {{ item.price }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  computed: {
    // список добавленных товаров в корзину 
    ...mapGetters({
      spisok_dlya_rendera: "spisok_dlya_rendera",
    }),
    ...mapState({
      cart: (state) => state.cart,
    }),
  },
};
</script>
<style>
.product-item {
  padding: 10px;
  border: 1px solid;
  margin-bottom: 10px;
}
.bold {
  font-weight: bold;
}
.cart-list {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
