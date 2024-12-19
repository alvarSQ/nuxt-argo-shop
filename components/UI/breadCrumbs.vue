<script setup lang="ts">
const { breadCrumbs } = storeToRefs(useAllStore());

const inSlugCategory = (str: string) => {
  if (breadCrumbs.value[0] === str)
    navigateTo({
      name: 'сategory-slug',
      params: { slug: str.replace(' ', '-') },
    });
};
</script>

<template>
  <div class="bread-crumbs">
    <span @click="navigateTo('/')">Home</span
    ><span
      v-for="(breadCrumb, index) in breadCrumbs"
      :key="index"
      @click="inSlugCategory(breadCrumb)"
    >
      / {{ breadCrumb }}</span
    >
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/utils/vars.scss' as *;

.bread-crumbs {
  grid-column: span 3 / span 3;
  color: gray;
  font-size: wmax(15);
  cursor: pointer;
}
</style>
