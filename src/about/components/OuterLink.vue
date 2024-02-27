<template>
  <a
    :href="href"
    class="outer-link"
    :class="{
      'outer-link--underline': underline
    }"
  >
    <component
      :is="icon"
      v-if="icon"
      class="outer-link__icon"
    />
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string;
  icon?: Object;
  underline?: boolean;
}>();
</script>

<style scoped lang="scss">
.outer-link {
  display: inline-flex;
  align-items: center;
  transition: color $animation;
  min-height: 40px;

  @include mouse-hover {
    color: var(--cl-text-hover);
  }

  &__icon {
    width: auto;
    height: 1rem;
    margin-right: 5px;
  }

  &--underline {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-underline-offset: 3px;
  }
}
</style>
