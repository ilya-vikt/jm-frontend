import type { ProductByIdInput } from '@/catalog/types';
import { endpoints } from '@/catalog/constants';
import { useFetch } from '@vueuse/core';
import { useRoute } from 'vue-router';

export const useProductById = () => {
  const route = useRoute();
  const {
    data: product,
    isFetching,
    error
  } = useFetch(`${endpoints.getProductById}/${route.params['id']}`).json<ProductByIdInput | null>();
  return {
    isFetching,
    error,
    product
  };
};
