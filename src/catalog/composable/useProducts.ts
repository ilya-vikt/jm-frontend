import type { FilterValue, Product } from '@/catalog/types';
import { reactive, ref, watchEffect } from 'vue';
import { useFetch, watchDebounced } from '@vueuse/core';
import { endpoints } from '@/catalog/constants';
import { useFilters } from '@/catalog/composable/useFilters';
import { useCategories } from '@/catalog/composable/useCategories';

const searchParams = reactive<{
  searchString: string;
  appliedFilters:
    | {
        id: number;
        value: NonNullable<FilterValue>;
      }[]
    | null;
  categoryId: number | null;
}>({
  searchString: '',
  appliedFilters: null,
  categoryId: null
});

const refetchIsAllow = ref(false);

const { filters } = useFilters();
const { currentPrimaryCategoryId, currentSecondaryCategoryId } = useCategories();

const {
  data: products,
  execute: refetchProducts,
  isFetching: isProductsFetching
} = useFetch(endpoints.searchProducts, {
  immediate: false
})
  .post(searchParams)
  .json<Product[] | null>();

const getQueryParams = () => {
  const params = searchParams.appliedFilters
    ? searchParams.appliedFilters.reduce<Record<string, string | null>>((acc, { id, value }) => {
        const filter = filters.value?.find((f) => f.id === id);
        if (filter) {
          if (filter.type === 'BOOLEAN') {
            acc[filter.name] = null;
          } else {
            acc[filter.name] = value.toString();
          }
        }
        return acc;
      }, {})
    : {};

  if (searchParams.searchString) {
    params['search'] = searchParams.searchString;
  }
  return params;
};

watchEffect(
  () =>
    (searchParams.categoryId =
      currentSecondaryCategoryId.value ?? currentPrimaryCategoryId.value ?? null)
);

watchDebounced(
  searchParams,
  () => {
    if (!refetchIsAllow.value) return;
    refetchProducts();
  },
  { debounce: 100 }
);

export const useProducts = () => {
  return {
    searchParams,
    products,
    isProductsFetching,
    refetchIsAllow,
    getQueryParams
  };
};
