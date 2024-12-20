<script setup lang="ts">
const { breadCrumbs, searchQuery } = storeToRefs(useAllStore());
const route = useRoute('products-search');

const q = computed(() => route.query.q);

const { data, status } = await useFetch(
  'https://dummyjson.com/products/search',
  {
    query: { q },
  }
);

const productsSerch = computed(() => (data.value as IProductsList).products);

const pending = computed(() => (status.value === 'pending' ? true : false));

const num_word = (value: number): string => {
  const words = ['товар', 'товара', 'товаров'];
  value = Math.abs(value) % 100;
  var num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num == 1) return words[0];
  return words[2];
};

const formatProductsCount = (count: number): string => {
  return `${count} ${num_word(count)}`;
};

onMounted(() => (breadCrumbs.value = []));
onUnmounted(() => (searchQuery.value = ''));
</script>

<template>
  <span class="title" style="font-weight: 400"
    >По запросу <span style="font-weight: 900">{{ q }}</span> найдено:
    {{ formatProductsCount((data as IProductsList).total) }}</span
  >
  <UIPreloader v-if="pending" />
  <div class="products-list" v-else>
    <template v-for="product in productsSerch" :key="product.id">
      <UICardProduct
        :image="product.images[0]"
        :price="product.price"
        :title="product.title"
        @click="navigateTo({ name: 'products-id', params: { id: product.id } })"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
