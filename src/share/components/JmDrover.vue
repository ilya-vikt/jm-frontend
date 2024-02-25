<template>
  <div
    v-if="visible"
    class="drover"
    @click.self="$emit('closeDrover')"
  >
    <div class="drover__container container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean;
}>();

defineEmits<{
  closeDrover: [];
}>();
</script>

<style scoped lang="scss">
.drover {
  position: fixed;
  z-index: 10;
  inset: 0;
  top: var(--header-height);
  padding: $padding-v $padding-h;
  background-color: var(--cl-bg);

  &__container {
    height: 100%;
  }
}
</style>
