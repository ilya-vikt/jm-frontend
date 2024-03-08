<template>
  <JmDrover
    :drover-name="FiltersPanelDroverName"
    class="filters-widget"
    :disabled="!isCompact"
  >
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
import { FiltersPanelDroverName } from '@/catalog/constants';
import { useBreackpoints } from '@/share/composable/useBreackpoints';

const { isCompact } = useBreackpoints();
</script>
