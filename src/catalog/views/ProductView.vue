<template>
  <div class="product-view">
    <CatalogBreadcrumbs
      v-if="!isCompact"
      :crumbs="getCrumbs"
      class="product-view__breadcrumbs"
    />

    <div class="product-view__content">
      <ProductPresentation
        :product="product"
        class="product-view__presentation"
      >
        <template #buyWidget
          ><h2 class="product-view__buy">Модуль заказа еще в разработке</h2>
        </template>
      </ProductPresentation>
      <CardBase class="stub"> Модуль заказа и оплаты товара в процессе разработки </CardBase>
    </div>
    <CardBase>Модуль отзывов еще в разработке</CardBase>
  </div>
</template>

<script setup lang="ts">
import ProductPresentation from '@/catalog/widgets/ProductPresentation.vue';
import CardBase from '@/share/components/CardBase.vue';
import CatalogBreadcrumbs from '@/catalog/blocks/CatalogBreadcrumbs.vue';
import { controllerName } from '@/catalog/constants';
import { computed } from 'vue';
import { useProductById } from '@/catalog/composable/useProductById';
import { useCategories } from '@/catalog/composable/useCategories';
import { useBreackpoints } from '@/share/composable/useBreackpoints';

const { product } = useProductById();
const { categories } = useCategories();
const { isCompact } = useBreackpoints();

const getCrumbs = computed(() => {
  if (!product.value || !categories.value) return [];

  const crumbs = [];
  const secondaryCategory = categories.value.find((cat) => cat.id === product.value!.categoryId);
  const primaryCategory = categories.value.find((cat) => cat.id === secondaryCategory?.parentId);

  crumbs.push(
    {
      caption: primaryCategory!.name,
      url: `/${controllerName}/${primaryCategory!.slug}`
    },
    {
      caption: secondaryCategory!.name,
      url: `/${controllerName}/${primaryCategory!.slug}/${secondaryCategory!.slug}`
    },
    { caption: product.value.name, url: '' }
  );

  return crumbs;
});
</script>

<style scoped lang="scss">
.product-view {
  &__breadcrumbs {
    margin-bottom: $gap-base;
  }

  &__content {
    display: flex;
    gap: $gap-base;
    margin-bottom: $gap-base;
  }

  &__presentation {
    flex: 1 1 70%;
  }

  &__buy {
    padding: $padding-v $padding-h;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid var(--cl-hover);
  }
}

.stub {
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
}

.is-laptop,
.is-compact {
  .stub {
    display: none;
  }
}
</style>
