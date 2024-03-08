<template>
  <div
    ref="zoomBox"
    class="zoom-box"
    @pointermove="moveHandler"
  >
    <img
      v-if="image"
      ref="img"
      :src="src"
      :alt="image.alt ?? ''"
    />
  </div>
</template>

<script setup lang="ts">
import type { ImageInputDto } from '@/share/types';
import { chooseImage } from '@/share/utils';
import { computed, ref } from 'vue';

const props = defineProps<{
  image: ImageInputDto | null;
}>();

const zoomBox = ref<HTMLDivElement | null>(null);
const img = ref<HTMLImageElement | null>(null);

const src = computed(() =>
  props.image && zoomBox.value ? chooseImage(props.image, zoomBox.value.offsetWidth * 3) : undefined
);

const translateX = ref('0');
const translateY = ref('0');

const moveHandler = ({ offsetX: x, offsetY: y }: PointerEvent) => {
  if (!img.value || !zoomBox.value) return;

  translateX.value =
    ((1 - (img.value.offsetWidth + 200) / zoomBox.value.offsetWidth) * x + 100).toString() + 'px';

  translateY.value =
    ((1 - (img.value.offsetHeight + 200) / zoomBox.value.offsetHeight) * y + 100).toString() + 'px';
};
</script>

<style scoped lang="scss">
.zoom-box {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-height: 300px;
  height: 100%;
  background-color: var(--cl-white);
  border-radius: $border-radius;
  cursor: move;

  img {
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: contain;
    will-change: width, height;
    user-select: none;
  }

  @include mouse-hover {
    display: block;

    img {
      min-width: 200%;
      height: auto;
      transform: translate3d(v-bind(translateX), v-bind(translateY), 0);
    }
  }
}
</style>
