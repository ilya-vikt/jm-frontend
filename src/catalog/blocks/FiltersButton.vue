<template>
  <JmButton
    v-if="isCompact"
    class="header-default__catalog"
    has-hover
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
import { FiltersPanelDroverName } from '@/catalog/constants';
const { toggleDrover } = useDroverController();
const { isCompact } = useBreackpoints();

const toggleFiltersPanel = () => {
  toggleDrover(FiltersPanelDroverName);
};
</script>
