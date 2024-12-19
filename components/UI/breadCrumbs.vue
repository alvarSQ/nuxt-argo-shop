<script setup lang="ts">
const { breadCrumbs } = storeToRefs(useAllStore());
</script>

<template>
  <div class="bread-crumbs">
    <span>Home</span><span v-for="(breadCrumb, index) in breadCrumbs" :key="index"> / {{ breadCrumb }}</span>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/utils/vars.scss' as *;

.bread-crumbs {
  grid-column: span 3 / span 3;
  color: gray;
  font-size: wmax(15);
}
</style>
