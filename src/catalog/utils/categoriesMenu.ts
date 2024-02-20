import { readonly } from 'vue';
import { useCategories } from '@/catalog/composable/useCategories';

const { categoriesMenuVisible: visible } = useCategories();

export const toggleCategoriesMenu = () => {
  visible.value = !visible.value;
};

export const categoriesMenuVisible = readonly(visible);
