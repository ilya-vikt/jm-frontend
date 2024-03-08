<template>
  <CardBase class="product-sceleton">
    <span class="product-sceleton__img loader"></span>
    <span class="product-sceleton__title loader"></span>
    <span class="product-sceleton__title loader"></span>
    <span class="product-sceleton__price loader"></span>
    <span class="product-sceleton__descr loader"></span>
  </CardBase>
</template>

<script setup lang="ts">
import CardBase from '@/share/components/CardBase.vue';
</script>

<style scoped lang="scss">
.product-sceleton {
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    display: block;
    border-radius: 5px;
  }

  &__img {
    aspect-ratio: 1 / 1;
  }

  &__title {
    height: 1.9rem;
  }

  &__price {
    height: 1.5rem;
    width: 30%;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  &__descr {
    height: 3.6rem;
  }
}
</style>
