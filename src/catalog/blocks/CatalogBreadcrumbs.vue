<template>
  <ul class="breadcrumbs">
    <li
      v-for="(crumb, idx) in preparedCrumbs"
      :key="idx"
      class="breadcrumbs__crumb"
    >
      <JmButton
        :decorative="idx === crumbs.length"
        :to="crumb.url"
        has-hover
        >{{ crumb.caption }}</JmButton
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
import JmButton from '@/share/components/JmButton.vue';
import { controllerName } from '@/catalog/constants';
import { computed } from 'vue';

const props = defineProps<{
  crumbs: {
    caption: string;
    url: string;
  }[];
}>();

const preparedCrumbs = computed(() => [
  { caption: 'Каталог', url: `/${controllerName}` },
  ...props.crumbs
]);
</script>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;

  &__crumb {
    display: flex;
    align-items: center;
    &:not(:last-child)::after {
      content: '>';
    }
  }
}
</style>
