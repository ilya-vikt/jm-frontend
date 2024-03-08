<template>
  <div class="products">
    <FiltersWidget />
    <ProductsList v-if="(products?.length ?? 0) > 0 || isProductsFetching" />
    <ProductsNotFound
      v-else
      class="products__not-found"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import ProductsList from '@/catalog/widgets/ProductsList.vue';
import ProductsNotFound from '@/catalog/components/ProductsNotFound.vue';
import { useCategories } from '@/catalog/composable/useCategories';
import { useProducts } from '@/catalog/composable/useProducts';
import FiltersWidget from '@/catalog/widgets/FiltersWidget.vue';

const { currentPrimaryCategoryId, currentSecondaryCategoryId, categories } = useCategories();
const { products, isProductsFetching, refetchIsAllow } = useProducts();

onMounted(() => {
  const route = useRoute();

  watchEffect(() => {
    const slug = route.params.primaryCategory;
    currentPrimaryCategoryId.value =
      slug && categories.value
        ? categories.value?.find((cat) => cat.slug === slug)?.id ?? null
        : null;
  });

  watchEffect(() => {
    const slug = route.params.secondaryCategory;
    currentSecondaryCategoryId.value =
      slug && categories.value
        ? categories.value?.find((cat) => cat.slug === slug)?.id ?? null
        : null;
  });

  refetchIsAllow.value = true;
});

onUnmounted(() => {
  refetchIsAllow.value = true;
  currentPrimaryCategoryId.value = null;
  currentSecondaryCategoryId.value = null;
});
</script>

<style scoped lang="scss">
.products {
  display: flex;
  gap: $gap-base;
  align-items: flex-start;

  &__panel {
    flex: 0 0 clamp(300px, 30%, 500px);
  }

  &__not-found {
    flex-grow: 1;
  }
}
</style>
