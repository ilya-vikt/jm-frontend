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
