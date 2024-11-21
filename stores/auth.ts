import { defineStore } from 'pinia';

const URL = 'https://dummyjson.com/docs/';

export const useAuthStore = defineStore('auth', () => {
  const count = ref(0)
  const name = ref('Иван')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})
