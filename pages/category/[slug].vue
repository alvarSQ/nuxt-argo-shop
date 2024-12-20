<script setup lang="ts">
import { useСategoriesStore } from '@/stores/categories';
const route = useRoute('category-slug');

const сategoriesStore = useСategoriesStore();
const { getProductsByCategory } = storeToRefs(useСategoriesStore());
const { breadCrumbs, isLoading } = storeToRefs(useAllStore());

const slug = computed(() => route.params.slug);

const getBreadCrumbs = () => {
  breadCrumbs.value = [];
  breadCrumbs.value.push(titleCategory.value.toLowerCase());
};

const titleCategory = computed(() => {
  let str = slug.value.replace('-', ' ');
  return str.toUpperCase();
});

onMounted(async () => {
  getBreadCrumbs();
  await сategoriesStore.loadCategories(slug.value);
});
</script>

<template>
  <span class="title">{{ titleCategory }}</span>
  <UIPreloader v-if="isLoading" />
  <div class="products-list" v-else>
    <template v-for="product in getProductsByCategory" :key="product.id">
      <UICardProduct
        :image="product.images[0]"
        :price="product.price"
        :title="product.title"
        @click="navigateTo({ name: 'products-id', params: { id: product.id } })"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>

</style>
