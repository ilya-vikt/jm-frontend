import type { FitlersByCategoryInput } from '@/catalog/types';
import { endpoints } from '@/catalog/constants';
import { useCategories } from '@/catalog/composable/useCategories';
import { computed } from 'vue';
import { useFetch } from '@vueuse/core';

const { currentSecondaryCategoryId } = useCategories();

/**
 * @prop {string} filtersUrl contains the calculated URL for requesting filters from the backend.
 * If the URL cannot be calculated due to a missing secondaryCategory or because
 * have not yet had time to request a list of categories from the backend, an empty string is returned.
 */
const filtersUrl = computed(() =>
  currentSecondaryCategoryId.value
    ? `${endpoints.getFilterByCategory}/${currentSecondaryCategoryId.value}`
    : ''
);

const { data: filters, isFetching: isFilterFetching } = useFetch(filtersUrl, {
  refetch: true,
  beforeFetch({ url, options, cancel }) {
    if (!url) {
      filters.value = null;
      cancel();
    }
    return { options };
  }
}).json<FitlersByCategoryInput[] | null>();

export const useFilters = () => {
  return {
    filters,
    isFilterFetching
  };
};
