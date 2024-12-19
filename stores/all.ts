import { defineStore } from 'pinia';

export const useAllStore = defineStore('all', () => {
 
  const breadCrumbs = ref([] as string[]);

  return { breadCrumbs };
});