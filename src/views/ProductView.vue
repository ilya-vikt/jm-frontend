<template>
  <div class="product-view">
    <ProductPresentation class="product-view__presentation">
      <template #buyWidget
        ><h2 class="product-view__buy">Модуль заказа еще в разработке</h2>
      </template>
    </ProductPresentation>
    <CardBase class="stub"> Модуль заказа и оплаты товара в процессе разработки </CardBase>
  </div>
  <CardBase>Модуль отзывов еще в разработке</CardBase>
</template>

<script setup lang="ts">
import { ProductPresentation } from '@/catalog';
import CardBase from '@/share/components/CardBase.vue';
</script>

<style scoped lang="scss">
.product-view {
  display: flex;
  gap: $gap-base;
  margin-bottom: $gap-base;

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
