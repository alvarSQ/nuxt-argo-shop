import { defineStore } from 'pinia';

const URL = 'https://dummyjson.com/products/';

export const useProductsStore = defineStore('products', () => {
  const products = ref([] as IProduct[]);
  const productById = ref({} as IProduct);
  const productsBySearch = ref([] as IProduct[]);

  const getProducts = computed(() => products.value);
  const getProductById = computed(() => productById.value);

  // const getProductsById = computed(() => (id: number) => products.find(el => el.id === id))

  const loadProduct = async (id = '') => {
    const { isLoading } = storeToRefs(useAllStore());
    isLoading.value = true;
    try {
      const data = await $fetch(`${URL}${id}`);
      id
        ? (productById.value = data as IProduct)
        : (products.value = (data as IProductsList).products);
    } catch (e) {
      console.log((e as Error).message);
    } finally {
      isLoading.value = false;
    }
  };

  const getBreadCrumbs = () => {
    const { breadCrumbs } = storeToRefs(useAllStore());
    breadCrumbs.value = [];
    breadCrumbs.value.push(
      productById.value.category.replace('-', ' '),
      productById.value.title
    );
  };

  return { getProducts, getProductById, loadProduct, getBreadCrumbs };
});
