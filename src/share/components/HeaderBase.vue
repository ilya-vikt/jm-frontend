<template>
  <div
    ref="header"
    class="header"
  >
    <header class="container header__container">
      <slot />
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useResizeObserver } from '@vueuse/core';

const header = ref(null);
onMounted(() => {
  useResizeObserver(header, (entries) => {
    document.documentElement.style.setProperty(
      '--header-height',
      `${entries[0].contentRect.height}px`
    );
  });
});
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  width: 100vw;
  top: 0;
  right: 0;
  left: 0;
  padding-right: var(--scrollbar-compensation);

  &__container {
    padding-left: $padding-h;
    padding-right: $padding-h;
    background-color: var(--cl-block);
    border-bottom: 1px solid var(--cl-border);

    @media (max-width: ($containerMaxWidth)) {
      padding-right: calc($padding-h + var(--scrollbar-compensation));
    }
  }

  @media (max-width: ($containerMaxWidth)) {
    padding-right: 0;
  }
}
</style>
