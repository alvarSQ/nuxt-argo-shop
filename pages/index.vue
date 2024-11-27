<script setup lang="ts">
const router = useRouter();
const authStore = useAuthStore();
const { accessToken } = storeToRefs(useAuthStore());

const logout = () => {
  authStore.logUserOut();
  router.push("/login");
};

const { data, status, execute, refresh } = await useFetch(
  "https://dummyjson.com/auth/me",
  {
    method: "GET",
    headers: {'Authorization': `Bearer ${accessToken.value}`},
    immediate: false,
    watch: [accessToken],
  }
);

const refreshData = async () => {
  await execute();
  if (!data.value) {
    await authStore.refreshAuthUser();
    await refresh();
  }
  authStore.user = data.value as IUserInfo;
};

const fN = computed(() => (data.value ? authStore.user.firstName : ""));
const pending = computed(() => (status.value === 'pending' ? true : false));

onMounted(() => refreshData());
</script>

<template>
  <div class="container">
    <div>
      <UIPreloader v-if="pending" />
      <p v-else>Привет {{ fN }}</p>

      <button class="btn" @click="logout">logout</button>
      <!-- <nuxt-link
      :to="{ name: 'posts', query: { page: 1 } }"
      class="text-5xl font-extrabold text-zinc-400"
      >Перейти к постам</nuxt-link
    > -->
    </div>
    <!-- <AuthInputs v-if="!authStore.user.username" /> -->
  </div>
</template>
