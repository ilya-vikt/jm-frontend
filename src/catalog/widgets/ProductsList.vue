<template>
  <ul
    v-if="!isProductsFetching"
    class="products-list"
  >
    <li
      v-for="product in products"
      :key="product.id"
      class="products-list__card"
    >
      <RouterLink :to="`${urlBase}/${product.id.toString()}`">
        <ProductCard :data="product" />
      </RouterLink>
    </li>
  </ul>
  <ul
    v-if="isProductsFetching"
    class="products-list__sceleton"
  >
    <li
      v-for="idx in 4"
      :key="idx"
    >
      <ProductCardSceleton
        :style="{
          '--idx': idx
        }"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import ProductCard from '@/catalog/blocks/ProductCard.vue';
import ProductCardSceleton from '@/catalog/blocks/ProductCardSceleton.vue';
import { controllerName } from '@/catalog/constants';
import { useProducts } from '@/catalog/composable/useProducts';

const { products, isProductsFetching } = useProducts();

const urlBase = `/${controllerName}/product`;
</script>

<style scoped lang="scss">
.products-list,
.products-list__sceleton {
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: $gap-base;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}

.is-laptop .products-list {
  grid-template-columns: repeat(2, minmax(250px, 1fr));
}

.is-tablet .products-list {
  grid-template-columns: repeat(2, minmax(250px, 1fr));
}

.is-mobile .products-list {
  grid-template-columns: repeat(1, minmax(250px, 1fr));
}
</style>
../composable/useProducts
