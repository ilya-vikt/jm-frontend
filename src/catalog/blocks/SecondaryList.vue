<template>
  <ul class="secondary-list">
    <li
      v-for="category in secondaryCategories"
      :key="category.id"
      class="secondary-list__item"
    >
      <SecondaryCategory
        :data="category"
        @click="closeDrover"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import SecondaryCategory from '@/catalog/components/SecondaryCategory.vue';
import { useCategories } from '@/catalog/composable/useCategories';
import { useDroverController } from '@/share/composable/useDroverController';

const { secondaryCategories } = useCategories();
const { closeDrover } = useDroverController();
</script>

<style scoped lang="scss">
.secondary-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: $gap-base;
}

.is-laptop .secondary-list,
.is-tablet .secondary-list {
  grid-template-columns: repeat(2, minmax(250px, 1fr));
}

.is-mobile .secondary-list {
  grid-template-columns: repeat(1, minmax(250px, 1fr));
}
</style>
