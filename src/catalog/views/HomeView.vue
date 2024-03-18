<template>
  <ProductsList class="products-list" />
</template>

<script setup lang="ts">
import ProductsList from '@/catalog/widgets/ProductsList.vue';
import { useProducts } from '@/catalog/composable/useProducts';
import { onMounted, onUnmounted } from 'vue';
const { enableProductsFetch, disableProductsFetch } = useProducts();

onMounted(() => {
  enableProductsFetch();
});

onUnmounted(() => {
  disableProductsFetch();
});
</script>
<style scoped lang="scss">
.products-list {
  max-width: 1380px;
  margin: 0 auto;
}
</style>
