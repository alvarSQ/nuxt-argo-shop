<script setup lang="ts">
const authStore = useAuthStore();

definePageMeta({
  middleware: 'auth-middleware'
})


// const toLogin = () => router.push({ name: 'login' })
// toLogin()

// const { data, status, error, refresh, clear } = await useFetch(
//         "https://dummyjson.com/auth/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             username: "emilys",
//             password: "emilyspass",
//             expiresInMins: 30, // optional, defaults to 60
//           }),
//           credentials: "include", // Include cookies (e.g., accessToken) in the request
//         }
//       );
//       authStore.user = data.value as IJwt
//       console.log(authStore.user);

</script>

<template>
  <div class="container">
  <div>
  Привет {{ authStore.user.firstName }}
    <!-- <nuxt-link
      :to="{ name: 'posts', query: { page: 1 } }"
      class="text-5xl font-extrabold text-zinc-400"
      >Перейти к постам</nuxt-link
    > -->
  </div>
  <!-- <AuthInputs v-if="!authStore.user.username" /> -->
  </div>
</template>
