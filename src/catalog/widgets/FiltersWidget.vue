<template>
  <JmDrover
    :drover-name="filtersPanelDroverName"
    class="filters-widget"
    :disabled="!isCompact"
  >
    <div
      v-if="isCompact"
      class="filters-widget__top"
    >
      <SearchBar class="filters-widget__search-bar" />
      <CloseDroverButton class="filters-widget__close" />
    </div>
    <FiltersPanel
      v-if="$route.name === 'secondaryCategory'"
      class="filters-widget__block"
    />
    <CategoriesPanel
      v-if="$route.name === 'primaryCategory' || $route.name === 'catalog'"
      class="filters-widget__block"
    />
  </JmDrover>
</template>
<script setup lang="ts">
import CategoriesPanel from '@/catalog/blocks/CategoriesPanel.vue';
import FiltersPanel from '@/catalog/blocks/FiltersPanel.vue';
import JmDrover from '@/share/components/JmDrover.vue';
import { filtersPanelDroverName } from '@/catalog/constants';
import { useBreackpoints } from '@/share/composable/useBreackpoints';
import SearchBar from '../blocks/SearchBar.vue';
import CloseDroverButton from '@/share/blocks/CloseDroverButton.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const { isCompact } = useBreackpoints();

const categoriesPanelVisible = computed(() =>
  ['primaryCategory', 'cagalog'].includes((useRoute()?.name ?? '') as string)
);

const filtersPanelVisible = computed(() =>
  ['secondaryCategory'].includes((useRoute()?.name ?? '') as string)
);
</script>

<style scoped lang="scss">
.filters-widget {
  &__top {
    display: flex;
    gap: $gap-base;
    margin-bottom: $gap-base;
  }

  &__search-bar {
    flex-grow: 1;
  }
}

.is-mobile .filters-widget {
  &__top {
    flex-direction: column;
  }

  &__close {
    order: -1;
    align-self: flex-end;
  }
}
</style>
