<template>
  <div class="product-features">
    <h2>Характеристики</h2>
    <dl class="product-features__list">
      <template
        v-for="feature in features"
        :key="feature.id"
      >
        <dt class="product-features__feature">
          <span>{{ feature.name }}</span>
        </dt>
        <dd class="product-features__value">{{ getFeatureValue(feature) }}</dd>
      </template>
    </dl>
  </div>
</template>

<script setup lang="ts">
import type { ProductByIdInput } from '../types';

defineProps<{
  features: ProductByIdInput['features'];
}>();

const getFeatureValue = (feature: ProductByIdInput['features'][0]) => {
  switch (feature.type) {
    case 'BOOLEAN':
      return feature.value ? 'Да' : 'Нет';
    case 'MULTILIST':
      return (feature.value as string[]).join(', ');
    default:
      return feature.value;
  }
};
</script>

<style scoped lang="scss">
.product-features {
  &__list {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    row-gap: $gap-base;
  }

  &__feature {
    position: relative;

    span {
      background-color: var(--cl-block);
      position: relative;
      z-index: 1;
      margin-right: $gap-base;
    }

    &::after {
      content: '';
      position: absolute;
      display: block;
      bottom: 5px;
      border-bottom: 1px dotted var(--cl-text);
      width: calc(100% - 2px);
      flex-grow: 1;
    }
  }
}
</style>
