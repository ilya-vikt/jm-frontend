<template>
  <HeaderDefault />
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
import HeaderDefault from '@/share/widgets/HeaderDefault.vue';
</script>

<style scoped lang="scss">
main {
  padding: calc(var(--header-height) + $padding-v) $padding-v $padding-h;
}
</style>
