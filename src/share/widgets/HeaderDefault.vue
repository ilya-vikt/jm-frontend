<template>
  <HeaderBase>
    <div class="header-default">
      <JmButton
        :icon="CatalogIcon"
        icon-size="24"
        :has-border="!isCompact"
        has-hover
        :pushed="false"
      >
        {{ isCompact ? '' : 'Каталог' }}
      </JmButton>
      <HeaderNav />
    </div>
  </HeaderBase>
</template>

<script setup lang="ts">
import HeaderBase from '@/share/components/HeaderBase.vue';
import HeaderNav from '@/share/blocks/HeaderNav.vue';
import { CatalogIcon } from '@/share/components/icons';

import JmButton from '@/share/components/JmButton.vue';
import { useBreackpoints } from '@/share/composable/useBreackpoints';

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
