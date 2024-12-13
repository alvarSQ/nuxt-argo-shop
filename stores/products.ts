import { defineStore } from 'pinia';

const URL = 'https://dummyjson.com/products';

export const useProductsStore = defineStore('products', () => {
  interface IProductsList {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
  }

  const products = ref([] as IProduct[]);

  const getProducts = computed(() => products.value);

  // const getProductsById = computed(() => (id: number) => products.find(el => el.id === id))

  const allProducts = async () => {
    try {
      const data = await $fetch(`${URL}`);
      products.value = (data as IProductsList).products;
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  return { getProducts, allProducts };
});
