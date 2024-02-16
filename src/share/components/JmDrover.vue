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
  inset: 0;
  top: var(--header-height);
  padding: $padding-v $padding-h;
  background-color: rgba(0, 0, 0, 0.3);

  &__container {
    height: 100%;
  }
}
</style>
