import { defineStore } from 'pinia';

export const useAllStore = defineStore('all', () => {
 
  const breadCrumbs = ref([] as string[]);

  const isLoading = ref(false)

  const searchQuery = ref('');

  return { breadCrumbs, isLoading, searchQuery };
});