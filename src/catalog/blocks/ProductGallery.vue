<template>
  <div class="product-gallery">
    <ZoomBox
      ref="zoomBox"
      class="product-gallery__zoom"
      :image="zoomImage"
    />
    <GalleryThumbnails
      ref="galleryThumbnails"
      v-model="selectedIdx"
      :thumbnails="gallery"
      :thumbPerView="thumbPerView"
      class="product-gallery__thumbnails"
    />
  </div>
</template>

<script setup lang="ts">
import type { ImageInputDto } from '@/share/types';
import ZoomBox from '@/catalog/components/ZoomBox.vue';
import GalleryThumbnails from '@/catalog/components/GalleryThumbnails.vue';
import { computed, ref, watch } from 'vue';
import { useSwipe } from '@vueuse/core';

const props = defineProps<{
  gallery: ImageInputDto[];
  thumbPerView: number;
}>();

const selectedIdx = ref(0);
const zoomImage = computed(() => props.gallery[selectedIdx.value] ?? null);

const zoomBox = ref(null);
const galleryThumbnails = ref<InstanceType<typeof GalleryThumbnails> | null>(null);

const { isSwiping, direction } = useSwipe(zoomBox);

watch(isSwiping, () => {
  if (isSwiping.value) return;

  if (direction.value === 'right') {
    galleryThumbnails.value?.prevThumb();
  }

  if (direction.value === 'left') {
    galleryThumbnails.value?.nextThumb();
  }
});
</script>

<style scoped lang="scss">
.product-gallery {
  display: flex;
  flex-direction: column;
  gap: $gap-base;
}
</style>
