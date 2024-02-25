<template>
  <ul class="products-list">
    <li
      v-for="product in productsList"
      :key="product.id"
      class="products-list__card"
    >
      <RouterLink :to="`${urlBase}/${product.id.toString()}`">
        <ProductCard :data="product" />
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import ProductCard from '@/catalog/blocks/ProductCard.vue';
import { useProducts } from '@/catalog/composable/useProducts';
import { controllerName } from '@/catalog/constants';
const { productsList } = useProducts();

const urlBase = `${controllerName}/product`;
</script>

<style scoped lang="scss">
.products-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $gap-base;
  max-width: 1400px;
  margin: 0 auto;
}

.is-laptop .products-list {
  grid-template-columns: repeat(3, 1fr);
}

.is-tablet .products-list {
  grid-template-columns: repeat(2, 1fr);
}

.is-mobile .products-list {
  grid-template-columns: repeat(1, 1fr);
}
</style>
