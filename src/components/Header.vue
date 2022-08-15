<script>
export default {
  name: "Header",
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
    <!-- вызов количество суммы и валюты и округление суммы-->
      Товаров в корзине на: {{ Math.round($store.state.cartPrice[0]) }}
      {{ $store.state.currency }}
    </h3>
  </div>
</template>
