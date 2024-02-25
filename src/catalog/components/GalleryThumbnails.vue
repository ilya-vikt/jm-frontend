<template>
  <div class="gallery-thumbnails">
    <JmButton
      :icon="ToLeftIcon"
      has-hover
      icon-size="24"
      has-border
      :disabled="modelValue === 0"
      @click="prevThumb"
    >
    </JmButton>
    <ul class="gallery-thumbnails__list">
      <li
        v-for="(thumb, idx) in thumbnails"
        :key="thumb.id"
        class="gallery-thumbnails__thumb"
        :style="{
          '--idx': idx
        }"
      >
        <input
          :id="`thumb-${thumb.id}`"
          v-model="modelValue"
          :value="idx"
          type="radio"
          name="gallery"
          class="sr-only"
        />
        <label :for="`thumb-${thumb.id}`">
          <img
            :src="chooseImage(thumb, 2048)"
            :srcset="chooseImage(thumb, 100)"
            :alt="thumb.alt"
          />
        </label>
      </li>
    </ul>
    <JmButton
      :icon="ToRightIcon"
      has-hover
      icon-size="24"
      has-border
      :disabled="modelValue === thumbnails.length - 1"
      @click="nextThumb"
    >
    </JmButton>
  </div>
</template>

<script setup lang="ts">
import type { ImageInputDto } from '@/share/types';
import { chooseImage } from '@/share/utils';
import JmButton from '@/share/components/JmButton.vue';
import { ToLeftIcon, ToRightIcon } from '@/share/components/icons';
import { computed } from 'vue';

const props = defineProps<{
  thumbnails: ImageInputDto[];
  thumbPerView: number;
}>();

const modelValue = defineModel<number>({ required: true });

const nextThumb = () => {
  if (modelValue.value === props.thumbnails.length - 1) return;
  modelValue.value++;
};
const prevThumb = () => {
  if (modelValue.value === 0) return;
  modelValue.value--;
};

defineExpose({
  nextThumb,
  prevThumb
});

const offset = computed(() => {
  const result = Math.floor(modelValue.value / props.thumbPerView) * props.thumbPerView;
  if (result > props.thumbnails.length - props.thumbPerView) {
    return props.thumbnails.length - props.thumbPerView;
  }
  return result;
});
</script>

<style scoped lang="scss">
.gallery-thumbnails {
  display: flex;
  gap: $gap-base;
  height: 80px;
  justify-content: space-between;

  &__wrapper {
    height: inherit;
    position: relative;
    flex-grow: 1;
    overflow: hidden;
  }

  &__list {
    gap: $gap-base;
    height: inherit;
    position: relative;
    flex-grow: 1;
    overflow: hidden;
  }

  &__thumb {
    display: flex;
    position: absolute;
    transform: translate3d(calc((100% + $gap-base) * (var(--idx) - v-bind(offset))), 0, 0);
    transition: transform $animation;
    width: calc((100% + $gap-base) / v-bind(thumbPerView) - $gap-base);
    justify-content: center;
    align-items: center;
    height: inherit;
    border-radius: $border-radius;
    overflow: hidden;

    label {
      cursor: pointer;
      height: inherit;
      width: 100%;
      background-color: var(--cl-white);
      position: relative;
      padding: 6px;

      &::before {
        content: '';
        transition: border-color 70ms ease-out;
        border: 2px solid transparent;
        position: absolute;
        inset: 2px;
        border-radius: $border-radius - 2;
      }
    }

    input:checked + label {
      &::before {
        border-color: var(--cl-bg);
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      user-select: none;
      border-radius: $border-radius - 5;
      overflow: hidden;
    }
  }
}
</style>
