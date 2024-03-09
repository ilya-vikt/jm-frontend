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
      <CloseDroverButton />
    </div>
    <FiltersPanel
      v-if="$route.params.secondaryCategory"
      class="filters-widget__block"
    />
    <CategoriesPanel
      v-else
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

const { isCompact } = useBreackpoints();
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
</style>
