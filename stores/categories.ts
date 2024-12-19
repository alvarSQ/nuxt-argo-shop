import { defineStore } from 'pinia';

const URL = 'https://dummyjson.com/products/categories';

export const useСategoriesStore = defineStore('categories', () => {
 
  const categories = ref([] as ICategories[]);

  const getCategories = computed(() => categories.value);

  const loadCategories = async () => {
    try {
      const data = await $fetch(`${URL}`);
      
      categories.value = data as ICategories[]
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  return { getCategories, loadCategories };
});
