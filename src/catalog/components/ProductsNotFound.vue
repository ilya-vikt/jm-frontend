<template>
  <CardBase class="not-found">
    <NotFoundIcon class="not-found__icon" />
    <div class="not-found__text">
      <p>Товаров, соответствующих запросу, не найдено.</p>
      <p>Попробуйте изенить фильтры</p>
    </div>
    <JmLoader />
  </CardBase>
</template>

<script setup lang="ts">
import CardBase from '@/share/components/CardBase.vue';
import JmLoader from '@/share/components/JmLoader.vue';
import { NotFoundIcon } from '@/share/components/icons';
</script>

<style scoped lang="scss">
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $gap-base;

  &__icon {
    flex-shrink: 0;
  }
  &__text {
    font-size: 1.5rem;
  }
}
</style>
