import type { CategoryInput, PrimaryCategory } from '@/catalog/types';
import { controllerName, endpoints } from '@/catalog/constants';
import { computed, ref, watchEffect, readonly } from 'vue';
import { useFetch } from '@vueuse/core';

//BEGIN CATEGORIES DATA
const {
  data: categories,
  isFetching,
  error
} = useFetch(endpoints.getCategories).json<CategoryInput | null>();

const primaryCategories = computed<PrimaryCategory[]>(() => {
  if (!categories.value) return [];
  const filtered = categories.value.filter((cat) => cat.parentId === 0);
  return filtered.map((cat) => ({
    ...cat,
    url: `/${controllerName}/${cat.slug}`
  }));
});

const primaryId = ref<number | null>(null);

const getSecondaryCategories = (primaryId: number | null) => {
  if (!categories.value || primaryId === null) return [];
  const filtered = categories.value.filter((cat) => cat.parentId === primaryId);

  return filtered.map((cat) => ({
    ...cat,
    url: `${primaryCategories.value.find((el) => el.id === cat.parentId)?.url}/${cat.slug}`
  }));
};

const secondaryCategories = computed(() => getSecondaryCategories(primaryId.value));
const primaryTitle = computed(() => {
  if (!primaryId.value) return '';
  return primaryCategories.value?.find((el) => el.id === primaryId.value)?.name ?? '';
});

const currentSecondaryCategoryId = ref<number | null>(null);
const currentPrimaryCategoryId = ref<number | null>(null);

export const useCategories = () => {
  return {
    isFetching,
    error,
    primaryCategories,
    secondaryCategories,
    primaryId,
    primaryTitle,
    getSecondaryCategories,
    categories: readonly(categories),
    currentSecondaryCategoryId,
    currentPrimaryCategoryId
  };
};
