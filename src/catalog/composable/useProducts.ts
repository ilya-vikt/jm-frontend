import type { ProductCardInput } from '@/catalog/types/products';
import { controllerName, endpoints } from '@/catalog/constants';
import { useFetch } from '@vueuse/core';
import { ref } from 'vue';

export const useProducts = () => {
  const page = ref(1);
  const limit = ref(20);

  const {
    data: productsList,
    isFetching,
    error
  } = useFetch(
    `${import.meta.env.VITE_API_URL}/${controllerName}/${endpoints.getProductCards}?page=${page.value}&limit=${limit.value}`
  ).json<ProductCardInput[] | null>();
  return {
    isFetching,
    error,
    page,
    limit,
    productsList
  };
};
