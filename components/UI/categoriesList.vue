<script setup lang="ts">
import { useСategoriesStore } from '@/stores/categories';

const сategoriesStore = useСategoriesStore();
const { getCategories } = storeToRefs(useСategoriesStore());

onMounted(async () => await сategoriesStore.loadCategories());
</script>

<template>
  <ul class="сategories flex-column">
    <li v-for="category in getCategories" :key="category.slug">
      <span @click="navigateTo({ name: 'category-slug', params: { slug: category.slug } })">{{ category.name }}</span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/utils/vars.scss' as *;

.сategories {
  margin-top: 10px;
  cursor: pointer;
  li {
    &:hover {
    color: $primary-color;
  }}
}
</style>
