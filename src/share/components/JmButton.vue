<template>
  <component
    :is="buttonType"
    :to="to"
    class="jm-button"
    :class="{
      'jm-button--vertical': vertical,
      'jm-button--bordered': hasBorder,
      'jm-button--has-hover': hasHover && !decorative,
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
    <slot />
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
    disabled?: boolean;
    decorative?: boolean;
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

const buttonType = computed(() => {
  if (props.decorative) return 'div';
  if (props.to) return RouterLink;
  return 'button';
});
</script>

<style scoped lang="scss">
.jm-button {
  display: flex;
  justify-content: v-bind(justify);
  align-items: center;
  gap: 10px;
  border: 2px solid transparent;
  padding: $padding-v $padding-h;
  transition:
    opacity $animation,
    background-color $animation,
    color $animation;
  border-radius: $border-radius;
  letter-spacing: inherit;
  outline: none;

  &:disabled {
    opacity: 0.3;
  }

  &:focus-visible {
    border: 2px solid var(--cl-outline);
  }

  &--vertical {
    flex-direction: column;
  }

  &--bordered {
    border-color: var(--cl-border);
  }

  &--pushed {
    @extend %hover-effect;
  }

  &--has-hover {
    @include mouse-hover-effect;
  }
}
</style>
