<template>
  <div class="products">
    <FiltersWidget />
    <div class="products__list">
      <CatalogBreadcrumbs
        v-if="!isCompact"
        :crumbs="getCrumbs"
        class="products__breadcrumbs"
      />
      <ProductsList
        v-if="(products?.length ?? 0) > 0 || isProductsFetching"
        class="products__list"
      />
      <ProductsNotFound
        v-else
        class="products__not-found"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import ProductsList from '@/catalog/widgets/ProductsList.vue';
import ProductsNotFound from '@/catalog/components/ProductsNotFound.vue';
import { useCategories } from '@/catalog/composable/useCategories';
import { useProducts } from '@/catalog/composable/useProducts';
import FiltersWidget from '@/catalog/widgets/FiltersWidget.vue';
import CatalogBreadcrumbs from '@/catalog/blocks/CatalogBreadcrumbs.vue';
import { controllerName } from '@/catalog/constants';
import { useBreackpoints } from '@/share/composable/useBreackpoints';

const { currentPrimaryCategoryId, currentSecondaryCategoryId, categories } = useCategories();
const { products, isProductsFetching, refetchIsAllow } = useProducts();
const { isCompact } = useBreackpoints();

const getCrumbs = computed(() => {
  const crumbs = [];
  const primaryCategory = currentPrimaryCategoryId.value
    ? categories.value?.find((cat) => cat.id === currentPrimaryCategoryId.value)
    : null;
  const secondaryCategory = currentSecondaryCategoryId.value
    ? categories.value?.find((cat) => cat.id === currentSecondaryCategoryId.value)
    : null;

  if (primaryCategory) {
    crumbs.push({
      caption: primaryCategory.name,
      url: `/${controllerName}/${primaryCategory.slug}`
    });
  }

  if (secondaryCategory) {
    crumbs.push({
      caption: secondaryCategory.name,
      url: ''
    });
  }
  return crumbs;
});

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

  &__breadcrumbs {
    margin-bottom: $gap-base;
  }
  &__not-found {
    flex-grow: 1;
  }
}
</style>
