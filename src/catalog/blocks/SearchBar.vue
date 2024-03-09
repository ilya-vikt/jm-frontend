<template>
  <label class="search-bar">
    <input
      v-model="searchBarModel"
      class="search-bar__input"
      type="text"
      placeholder="Поиск товаров"
      @keypress.enter="changeHandler"
    />
    <JmButton
      class="search-bar__btn"
      has-hover
      :icon="MagnifierIcon"
      default
      @click="changeHandler"
    />
  </label>
</template>

<script setup lang="ts">
import JmButton from '@/share/components/JmButton.vue';
import { MagnifierIcon } from '@/share/components/icons';
import { useProducts } from '@/catalog/composable/useProducts';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useFilters } from '@/catalog/composable/useFilters';

const { searchParams } = useProducts();
const { searchBarModel } = useFilters();
const router = useRouter();
const route = useRoute();

onMounted(() => {
  const searchQueryParam = route.query['search'] as string | undefined;
  if (!searchQueryParam || !searchBarModel.value) return;
  searchBarModel.value = searchQueryParam;
  searchParams.searchString = searchQueryParam;
});

const changeHandler = () => {
  if (!searchBarModel) return;
  router.push({ query: { ...route.query, search: searchBarModel.value } });
  searchParams.searchString = searchBarModel.value;
};
</script>

<style scoped lang="scss">
.search-bar {
  display: flex;
  overflow: hidden;

  &__input {
    flex-grow: 1;
    background-color: var(--cl-block);
    border: none;
    border: 2px solid var(--cl-border);
    border-bottom-left-radius: $border-radius;
    border-top-left-radius: $border-radius;
    padding: $padding-v $padding-h;
    outline: none;
    caret-color: var(--cl-text);
    transition:
      color $animation,
      background-color $animation;

    &::placeholder {
      color: currentColor;
    }

    &:focus-visible {
      border-color: var(--cl-outline);
    }

    @include mouse-hover {
      background-color: var(--cl-hover);
      color: var(--cl-text-hover);
    }
  }

  &__btn {
    border: 2px solid var(--cl-border);
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
