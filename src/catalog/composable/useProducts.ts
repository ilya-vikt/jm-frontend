import type { FilterValue, Product } from '@/catalog/types';
import { reactive, watchEffect, type WatchStopHandle } from 'vue';
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

const { filters, searchBarModel } = useFilters();
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

let _categoryIdWatchStopHandle: WatchStopHandle | null = null;
let _refetchWatchStopHandle: WatchStopHandle | null = null;

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

const enableProductsFetch = () => {
  _categoryIdWatchStopHandle = watchEffect(() => {
    searchParams.categoryId =
      currentSecondaryCategoryId.value ?? currentPrimaryCategoryId.value ?? null;
    searchParams.appliedFilters = null;
    searchParams.searchString = '';
    searchBarModel.value = '';
  });

  _refetchWatchStopHandle = watchDebounced(
    searchParams,
    () => {
      refetchProducts();
    },
    { debounce: 100, immediate: true }
  );
};

const disableProductsFetch = () => {
  _categoryIdWatchStopHandle && _categoryIdWatchStopHandle();
  _refetchWatchStopHandle && _refetchWatchStopHandle();
  products.value = null;
};

export const useProducts = () => {
  return {
    searchParams,
    products,
    isProductsFetching,
    getQueryParams,
    enableProductsFetch,
    disableProductsFetch
  };
};
