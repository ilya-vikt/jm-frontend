<template>
  <component
    :is="to ? RouterLink : 'button'"
    :to="to"
    class="jm-button"
    :class="{
      'jm-button--vertical': vertical,
      'jm-button--bordered': hasBorder,
      'jm-button--has-hover': hasHover,
      'jm-button--pushed': pushed
    }"
  >
    <component
      :is="icon"
      v-if="icon"
      :width="iconSize"
      :height="iconSize"
      class="jm-button__icon"
    />
    <span
      v-if="$slots.default"
      class="jm-button__content"
    >
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
const props = withDefaults(
  defineProps<{
    icon?: Object;
    vertical?: boolean;
    iconSize?: number | string;
    to?: string;
    hasBorder?: boolean;
    hasHover?: boolean;
    pushed?: boolean;
    justify?: 'left' | 'center' | 'right';
  }>(),
  {
    vertical: false,
    iconSize: '1em'
  }
);
const justify = computed(() => {
  if (props.justify === 'left') return 'flex-start';
  if (props.justify === 'right') return 'flex-end';
  return 'center';
});
</script>

<style scoped lang="scss">
.jm-button {
  display: flex;
  justify-content: v-bind(justify);
  align-items: center;
  gap: 10px;
  padding: $padding-v $padding-h;
  transition:
    opacity $animation,
    background-color $animation,
    color $animation;
  border-radius: $border-radius;
  letter-spacing: inherit;

  &:disabled {
    opacity: 0.3;
  }

  &--vertical {
    flex-direction: column;
  }

  &--bordered {
    border: 2px solid var(--cl-border);
  }

  &--pushed {
    @extend %hover-effect;
  }

  &--has-hover {
    @include mouse-hover-effect;
  }
}
</style>
