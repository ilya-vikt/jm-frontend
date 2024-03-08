export const controllerName = 'catalog';

export const endpoints = {
  getCategories: `${import.meta.env.VITE_API_URL}/${controllerName}/getcategories`,
  getFilterByCategory: `${import.meta.env.VITE_API_URL}/${controllerName}/getfiltersbycategory`,
  getProductCards: `${import.meta.env.VITE_API_URL}/${controllerName}/getproductcards`,
  getProductById: `${import.meta.env.VITE_API_URL}/${controllerName}/getproductbyid`,
  searchProducts: `${import.meta.env.VITE_API_URL}/${controllerName}/searchproducts`
} as const;
