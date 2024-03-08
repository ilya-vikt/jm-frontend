<template>
  <label class="search-bar">
    <input
      v-model="searchString"
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
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const { searchParams } = useProducts();
const searchString = ref('');
const router = useRouter();
const route = useRoute();

onMounted(() => {
  const searchQueryParam = route.query['search'] as string | undefined;
  if (searchQueryParam) {
    searchString.value = searchQueryParam;
    searchParams.searchString = searchQueryParam;
  }
});

const changeHandler = () => {
  router.push({ query: { ...route.query, search: searchString.value } });
  searchParams.searchString = searchString.value;
};
</script>

<style scoped lang="scss">
.search-bar {
  display: flex;
  border: 2px solid var(--cl-border);
  border-radius: $border-radius;
  overflow: hidden;

  &__input {
    flex-grow: 1;
    background-color: var(--cl-block);
    border: none;
    border-right: 2px solid var(--cl-border);
    padding: $padding-v $padding-h;
    outline: none;
    caret-color: var(--cl-text);
    transition:
      color $animation,
      background-color $animation;

    &::placeholder {
      color: currentColor;
    }

    @include mouse-hover {
      background-color: var(--cl-hover);
      color: var(--cl-text-hover);
    }
  }

  &__btn {
    border-radius: 0;
  }
}
</style>
