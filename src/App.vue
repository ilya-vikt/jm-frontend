<template>
  <div
    class="container"
    :class="{
      'is-desktop': isDesktop,
      'is-laptop': isLaptop,
      'is-tablet': isTablet,
      'is-mobile': isMobile,
      'is-compact': isCompact,
      'is-ultrawide': isUltraWide
    }"
  >
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppLayout from '@/layouts/AppLayout.vue';
import { useBreackpoints } from '@/share/composable/useBreackpoints';

const { isCompact, isUltraWide, isDesktop, isLaptop, isMobile, isTablet } = useBreackpoints();
</script>

<style lang="scss">
@import './assets/styles/style.scss';
</style>

<style scoped lang="scss">
.container {
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
}

.is-ultrawide.container {
  border-left-color: var(--cl-border);
  border-right-color: var(--cl-border);
}
</style>
