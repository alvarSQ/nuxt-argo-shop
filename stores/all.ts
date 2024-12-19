import { defineStore } from 'pinia';

export const useAllStore = defineStore('all', () => {
 
  const breadCrumbs = ref([] as string[]);

  const isLoading = ref(false)

  return { breadCrumbs, isLoading };
});