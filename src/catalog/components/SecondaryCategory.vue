<template>
  <JmButton
    has-hover
    :to="data.slug"
    class="secondary-item"
  >
    <div
      class="secondary-item__inner"
      :style="{
        'background-image': image
      }"
    >
      {{ data.name }}
    </div>
  </JmButton>
</template>

<script setup lang="ts">
import type { SecondaryCategory } from '@/catalog/types';
import JmButton from '@/share/components/JmButton.vue';
import { chooseImage } from '@/share/utils';
import { computed } from 'vue';

const props = defineProps<{
  data: SecondaryCategory;
}>();

const image = computed(() => {
  if (!props.data.image) return 'none';
  const { urls, width, height } = props.data.image;
  const url = chooseImage(urls, width, height, 300);
  return `url("${url}")`;
});
</script>

<style scoped lang="scss">
.secondary-item {
  width: 100%;
  height: 200px;
  background-color: var(--cl-hover);
  color: var(--cl-text);

  &__inner {
    width: 100%;
    height: 100%;
    background-size: auto calc(100% - 2.4em);
    background-position: right bottom;
    background-repeat: no-repeat;
    font-size: 2rem;
  }

  @include mouse-hover {
    color: var(--cl-text-hover);
  }
}
</style>
