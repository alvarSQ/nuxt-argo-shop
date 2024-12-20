<script setup lang="ts">
const { breadCrumbs, searchQuery } = storeToRefs(useAllStore());
const route = useRoute('products-search');

const q = computed(() => route.query.q);

const productsSerchAll = ref([] as IProduct[]);

const skip = ref(0);

const { data, status, execute } = await useFetch(
  'https://dummyjson.com/products/search',
  {
    params: { q, limit: 16, skip }
  }
);

const productsInfinite = async () => {
  if (
    skip.value !== 0 &&
    skip.value >= (data.value as IProductsList).total
  )
    return;
  if (pending.value) return;
  skip.value = productsSerchAll.value.length;
  await execute();
  productsSerchAll.value.push(...(data.value as IProductsList).products);
};

const checkPosition = () => {
  // Высота документа и экрана
  const height = document.body.offsetHeight;
  const screenHeight = window.innerHeight;

  // Сколько пикселей уже проскроллили
  const scrolled = window.scrollY;

  // Порог
  const threshold = height - screenHeight / 4;

  // Низ экрана относительно страницы
  const position = scrolled + screenHeight;

  if (position >= threshold) {
    productsInfinite();
  }
}

const pending = computed(() => (status.value === 'pending' ? true : false));

const num_word = (value: number): string => {
  const words = ['товар', 'товара', 'товаров'];
  value = Math.abs(value) % 100;
  const num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num == 1) return words[0];
  return words[2];
};

const formatProductsCount = (count: number): string => {
  return `${count} ${num_word(count)}`;
};

onMounted(() => {
  breadCrumbs.value = [];
  productsInfinite();
  window.addEventListener('scroll', checkPosition);
});
onUnmounted(() => {
  searchQuery.value = '';
  window.addEventListener('scroll', checkPosition);
});
</script>

<template>
  <span class="title" style="font-weight: 400"
    >По запросу <span style="font-weight: 900">{{ q }}</span> найдено:
    {{ formatProductsCount((data as IProductsList).total) }}</span
  >
  <!-- <UIPreloader v-if="pending" /> -->
  <div class="products-list">
    <template v-for="product in productsSerchAll" :key="product.id">
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
