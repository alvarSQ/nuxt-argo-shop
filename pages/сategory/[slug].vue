<script setup lang="ts">
import { useСategoriesStore } from '@/stores/categories';
const route = useRoute('сategory-slug');

const сategoriesStore = useСategoriesStore();
const { getCategories } = storeToRefs(useСategoriesStore());
const { breadCrumbs } = storeToRefs(useAllStore());

const slug = computed(() => route.params.slug);

const getBreadCrumbs = () => {
    breadCrumbs.value = []
    breadCrumbs.value.push(slug.value);
  }

onMounted(async () => getBreadCrumbs());
</script>

<template>
    <div>
{{ slug }}
    </div>
</template>

<style lang="scss" scoped>

</style>