<template>
  <CardBase
    v-if="product"
    class="product-presentation"
  >
    <h1 class="product-presentation__title">{{ product.name }}</h1>
    <ProductGallery
      class="product-presentation__gallery"
      :gallery="product.gallery ?? []"
      :thumb-per-view="thumbPerView"
    />
    <slot
      v-if="!isDesktop"
      class="product-presentation__buy"
      name="buyWidget"
    />
    <ProductFeatures
      class="product-presentation__features"
      :features="product.features"
    />
    <div class="product-presentation__descr">
      <h2>Описание</h2>
      <p>
        {{ product?.description }}
      </p>
    </div>
  </CardBase>
</template>

<script setup lang="ts">
import CardBase from '@/share/components/CardBase.vue';
import ProductGallery from '@/catalog/blocks/ProductGallery.vue';
import ProductFeatures from '@/catalog/blocks/ProductFeatures.vue';
import { useProductById } from '@/catalog/composable/useProductById';
import { useBreackpoints } from '@/share/composable/useBreackpoints';
import { computed } from 'vue';

const { product } = useProductById();
const { isDesktop, isMobile } = useBreackpoints();

const thumbPerView = computed(() => {
  if (isDesktop.value) return 4;
  if (isMobile.value) return 2;
  return 3;
});

defineSlots<{
  buyWidget(): any;
}>();
</script>

<style scoped lang="scss">
.product-presentation {
  display: grid;
  row-gap: $gap-base * 2;
  column-gap: $gap-base * 3;
  align-items: start;
  grid-template-columns: 60% 1fr;
  grid-template-areas:
    'title   title'
    'gallery features'
    'buy     buy'
    'descr   descr';

  &__title {
    grid-area: title;
  }

  &__gallery {
    grid-area: gallery;
    height: max(300px, 70vh);
  }

  &__buy {
    grid-area: buy;
  }

  &__features {
    grid-area: features;
  }

  &__descr {
    grid-area: descr;
    margin: 0 auto;
    justify-self: center;
    max-width: 900px;
  }
}

.is-desktop .buy {
  display: block;
}

.is-compact {
  .product-presentation {
    gap: $gap-base * 3;
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'gallery'
      'buy'
      'features'
      'descr';
  }
}
</style>
