<template>
  <HeaderBase>
    <div class="header-default">
      <JmButton
        has-hover
        icon-size="24"
        :icon="CatalogIcon"
        :has-border="!isCompact"
        :pushed="categoriesMenuVisible"
        @click="toggleCategoriesMenu"
      >
        {{ isCompact ? '' : 'Каталог' }}
      </JmButton>
      <HeaderNav />
    </div>
  </HeaderBase>
  <CategoriesMenu />
</template>

<script setup lang="ts">
import HeaderBase from '@/share/components/HeaderBase.vue';
import HeaderNav from '@/share/blocks/HeaderNav.vue';
import { CatalogIcon } from '@/share/components/icons';

import JmButton from '@/share/components/JmButton.vue';
import { useBreackpoints } from '@/share/composable/useBreackpoints';
import { categoriesMenuVisible, toggleCategoriesMenu, CategoriesMenu } from '@/catalog';

const { isCompact } = useBreackpoints();
</script>

<style scoped lang="scss">
.header-default {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: $gap-base;
  min-height: 70px;
}
</style>
