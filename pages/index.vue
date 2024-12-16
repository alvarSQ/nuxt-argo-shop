<script setup lang="ts">
const router = useRouter()

const productsStore = useProductsStore();

// const { data, status, execute } = await useFetchAuth(
//   'https://dummyjson.com/auth/me'
// );

// const getUserData = async () => {
//   await execute();
//   authStore.user = data.value as IUserInfo;
// };

// const fN = computed(() => (data.value ? authStore.user.firstName : ''));
// const pending = computed(() => (status.value === 'pending' ? true : false));


// const removeSpaces = (title: string) => title = title.toLowerCase().replace(/\s/g, "-")

onMounted(() => productsStore.loadProduct());
</script>

<template>
  <div class="content-main">
    <NuxtImg src="/images/baner-main.webp" />
    <span class="main-caption">Популярные товары</span>
    <div class="products-main">
      <template v-for="product in productsStore.getProducts" :key="product.id">
        <UICardProduct :image="product.images[0]" :price="product.price" :title="product.title" @click="router.push(`/products/${product.id}`)"/>
      </template>
    </div>
    <!-- <UIPreloader v-if="pending" />
      <p v-else>Привет {{ fN }}</p>

      <button class="btn" @click="authStore.logUserOut()">logout</button> -->
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/utils/vars.scss' as *;

.products-main {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.main-caption {
  font-weight: 700;
  letter-spacing: .4px;
  font-size: wmax(26);
  color: rgb(66, 66, 66);
}

.content-main {
  display: flex;
  flex-direction: column;
  margin-top: 132px;
  gap: 20px;
}
</style>
