<template>
  <CardBase class="product-card">
    <div class="product-card__wrapper">
      <img
        ref="productCardImg"
        :src="chooseImage(data.thumb, 400, 400)"
        :alt="data.thumb.alt"
        class="product-card__img"
      />
    </div>
    <div class="product-card__bottom">
      <h3 class="product-card__title">{{ data.name }}</h3>
      <div class="product-card__prices">
        <span
          v-if="data.marketingPrice"
          class="product-card__price"
          >{{ priceFormatter(data.marketingPrice) }}
        </span>
        <span
          class="product-card__price"
          :class="{
            'product-card__price--strike': data.marketingPrice
          }"
        >
          {{ priceFormatter(data.price) }}
        </span>
        <span
          v-if="data.marketingPrice"
          class="product-card__sale"
        >
          {{ sale }}
        </span>
      </div>
      <p class="product-card__descr">{{ data.description }}</p>
    </div>
  </CardBase>
</template>

<script setup lang="ts">
import type { Product } from '@/catalog/types/products';
import CardBase from '@/share/components/CardBase.vue';
import { computed, onMounted, ref } from 'vue';
import { chooseImage, imgLazyLoad, priceFormatter } from '@/share/utils';

const props = defineProps<{ data: Product }>();
const productCardImg = ref<HTMLImageElement | null>(null);

const sale = computed(() =>
  props.data.marketingPrice
    ? `-${Math.floor(100 - (props.data.marketingPrice * 100) / props.data.price)}%`
    : ''
);

onMounted(() => {
  if (!productCardImg.value) return;
  imgLazyLoad(productCardImg.value);
});
</script>

<style scoped lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__wrapper {
    border-radius: 5px;
    overflow: hidden;
    flex-grow: 1;
    background-color: var(--cl-white);
    display: flex;
    align-items: center;
    aspect-ratio: 1 / 1;
  }

  &__img {
    width: 100%;
    object-fit: contain;
  }

  &__title {
    margin-bottom: 5px;
    -webkit-line-clamp: 2;
    height: calc(2 * 2rem * 1.2);
  }

  &__title,
  &__descsr {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__prices {
    margin-bottom: 5px;
    display: flex;
    gap: 15px;
    font-size: 1.3rem;
    align-items: start;
  }

  &__price {
    text-wrap: nowrap;
    color: var(--cl-green);
    font-weight: 700;

    &--strike {
      font-size: 0.8em;
      position: relative;
      color: var(--cl-text);
      font-weight: 400;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        width: 100%;
        height: 2px;
        background-color: currentColor;
        transform: rotate(-2deg);
      }
    }
  }

  &__sale {
    color: var(--cl-red);
  }

  &__descr {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    height: calc(3 * 1rem * 1.2);
  }
}
</style>
