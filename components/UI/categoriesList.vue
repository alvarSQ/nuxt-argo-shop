<script setup lang="ts">
import { useСategoriesStore } from '@/stores/categories';

const сategoriesStore = useСategoriesStore();
const { getCategories } = storeToRefs(useСategoriesStore());

onMounted(async () => await сategoriesStore.loadCategories());
</script>

<template>
  <ul class="сategories flex-column">
    <li v-for="сategory in getCategories" :key="сategory.slug">
      <span @click="navigateTo({ name: 'сategory-slug', params: { slug: сategory.slug } })">{{ сategory.name }}</span>
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
