<script setup lang="ts">
const router = useRouter();
const authStore = useAuthStore();
const { accessToken } = storeToRefs(useAuthStore());

const logout = () => {
  authStore.logUserOut();
  router.push("/login");
};

const { data, status, execute } = await useFetch('https://dummyjson.com/auth/me', {
  onRequest({ options }) {
    options.method?.concat('GET')
    options.headers.set('Authorization', `Bearer ${accessToken.value}`)
  },
  async onResponseError({ response }) {
    response.status === 401 ? await authStore.refreshAuthUser() : logout()    
  }
})


const refreshData = async () => {
  await execute();
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
    </div>
  </div>
</template>
