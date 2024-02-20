import type { CategoryInput, PrimaryCategory } from '@/catalog/types';
import { controllerName, endpoints } from '@/catalog/constants';
import { computed, ref, watchEffect } from 'vue';
import { useFetch } from '@vueuse/core';

//BEGIN CATEGORIES DATA
const {
  data: categories,
  isFetching,
  error
} = useFetch(
  `${import.meta.env.VITE_API_URL}/${controllerName}/${endpoints.getCategories}`
).json<CategoryInput | null>();

const primaryCategories = computed<PrimaryCategory[]>(
  () => categories.value?.filter((cat) => cat.parentId === 0) ?? []
);

const primaryId = ref<number | null>(null);

const secondaryCategories = computed(() => {
  if (!primaryId.value) return [];
  return categories.value?.filter((cat) => cat.parentId === primaryId.value) ?? [];
});

const primaryTitle = computed(() => {
  if (!primaryId.value) return '';
  return primaryCategories.value?.find((cat) => cat.id === primaryId.value)?.name ?? '';
});
//END CATEGORIES DATA

//BEGIN MENU
const categoriesMenuVisible = ref(true);

watchEffect(() => {
  if (!categoriesMenuVisible.value) {
    primaryId.value = null;
  }
});
//END MENU

export const useCategories = () => ({
  isFetching,
  error,
  primaryCategories,
  secondaryCategories,
  categoriesMenuVisible,
  primaryId,
  primaryTitle
});
