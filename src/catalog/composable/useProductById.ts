import type { ProductByIdInput } from '@/catalog/types';
import { controllerName, endpoints } from '@/catalog/constants';
import { useFetch } from '@vueuse/core';
import { useRoute } from 'vue-router';

export const useProductById = () => {
  const route = useRoute();
  const {
    data: product,
    isFetching,
    error
  } = useFetch(
    `${import.meta.env.VITE_API_URL}/${controllerName}/${endpoints.getProductById}/${route.params['id']}`
  ).json<ProductByIdInput | null>();
  return {
    isFetching,
    error,
    product
  };
};
