<template>
  <div
    v-if="droversStates[droverName] || disabled"
    :class="{
      drover: !disabled
    }"
    @click.self="$emit('closeDrover')"
  >
    <div :class="{ 'drover__container container': !disabled }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue';
import { useDroverController } from '@/share/composable/useDroverController';

const { registerDrover, unregisterDrover, droversStates } = useDroverController();

const props = withDefaults(
  defineProps<{
    droverName: string;
    disabled?: boolean;
  }>(),
  {
    disabled: false
  }
);

defineEmits<{
  closeDrover: [];
}>();

watch(
  () => props.disabled,
  (value) => {
    if (value) {
      unregisterDrover(props.droverName);
    } else {
      registerDrover(props.droverName);
    }
  }
);

onMounted(() => {
  if (props.disabled) return;
  registerDrover(props.droverName);
});

onUnmounted(() => {
  unregisterDrover(props.droverName);
});
</script>

<style scoped lang="scss">
.drover {
  position: fixed;
  z-index: 10;
  inset: 0;
  top: var(--header-height);
  background-color: var(--cl-bg);

  &__container {
    padding: $padding-v $padding-h;
    height: 100%;
    overflow-y: auto;
  }
}
</style>
