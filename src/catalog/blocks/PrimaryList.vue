<template>
  <ul class="primary-list">
    <li
      v-for="category in primaryCategories"
      :key="category.id"
    >
      <JmButton
        has-hover
        :to="isCompact ? '' : category.url"
        justify="left"
        class="primary-list__item"
        @pointerenter="selectHandler(category.id, 'hover')"
        @click="selectHandler(category.id, 'click')"
      >
        {{ category.name }}
      </JmButton>
    </li>
  </ul>
</template>

<script setup lang="ts">
import JmButton from '@/share/components/JmButton.vue';
import { useCategories } from '@/catalog/composable/useCategories';
import { useBreackpoints } from '@/share/composable/useBreackpoints';
import { useDroverController } from '@/share/composable/useDroverController';

const { closeDrover } = useDroverController();
const { primaryCategories, primaryId } = useCategories();
const { isCompact } = useBreackpoints();

const selectHandler = (id: number, e: 'hover' | 'click') => {
  if ((isCompact.value && e === 'click') || (!isCompact.value && e === 'hover')) {
    primaryId.value = id;
    return;
  }

  if (!isCompact.value && e === 'click') {
    closeDrover();
  }
};
</script>

<style scoped lang="scss">
.primary-list {
  &__item {
    width: 100%;
  }
}
</style>
