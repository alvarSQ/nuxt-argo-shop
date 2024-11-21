<script setup lang="ts">
const { data, status, error, refresh, clear } = await useFetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30, // optional, defaults to 60
  }),
  credentials: 'include' // Include cookies (e.g., accessToken) in the request
})

const accessToken = computed(() => (data.value as IJwt).accessToken)

</script>

<template>
  <div class="flex justify-center items-center h-screen">
  {{ (data as IJwt).accessToken }}
    <nuxt-link
      :to="{ name: 'posts', query: { page: 1 } }"
      class="text-5xl font-extrabold text-zinc-400"
      >Перейти к постам</nuxt-link
    >
  </div>
</template>
