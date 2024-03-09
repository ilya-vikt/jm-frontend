<template>
  <JmButton
    class="header-default__catalog"
    has-hover
    :pushed="openedDroverName === categoriesMenuDroverName"
    icon-size="24"
    :icon="CatalogIcon"
    :has-border="!isCompact"
    @click="toggleCategoriesMenu"
  >
    {{ isCompact ? '' : 'Каталог' }}
  </JmButton>
</template>

<script setup lang="ts">
import { useBreackpoints } from '@/share/composable/useBreackpoints';
import { useDroverController } from '@/share/composable/useDroverController';
import { CatalogIcon } from '@/share/components/icons';
import JmButton from '@/share/components/JmButton.vue';
import { categoriesMenuDroverName } from '../constants';
const { isCompact } = useBreackpoints();
const { toggleDrover, openedDroverName } = useDroverController();

const toggleCategoriesMenu = () => {
  toggleDrover(categoriesMenuDroverName);
};
</script>
