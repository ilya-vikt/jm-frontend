<template>
  <JmButton
    v-if="isCompact"
    class="header-default__catalog"
    has-hover
    :pushed="openedDroverName === filtersPanelDroverName"
    icon-size="24"
    :icon="FilterIcon"
    @click="toggleFiltersPanel"
  />
</template>

<script setup lang="ts">
import { useBreackpoints } from '@/share/composable/useBreackpoints';
import { useDroverController } from '@/share/composable/useDroverController';
import { FilterIcon } from '@/share/components/icons';
import JmButton from '@/share/components/JmButton.vue';
import { filtersPanelDroverName } from '@/catalog/constants';
const { toggleDrover, openedDroverName } = useDroverController();

const { isCompact } = useBreackpoints();

const toggleFiltersPanel = () => {
  toggleDrover(filtersPanelDroverName);
};
</script>
