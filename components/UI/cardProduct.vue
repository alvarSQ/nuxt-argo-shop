<script setup lang="ts">
const props = defineProps<{
  image: string,
  price: number,
  title: string
}>();


</script>

<template>
  <div class="card-product">
    <div class="img center">
      <UIPreloader v-if="0" />
      <NuxtImg :src="image" />
    </div>
    <span class="price"> {{ price }} <span> ₽ </span></span>
    <span class="title">{{ title }} </span>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/utils/vars.scss' as *;

.title {
  color: #007800;
  overflow: hidden;
  &:hover {
    overflow: visible;
  }
}

.price {
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  color: $primary-color;
}

.img {
  height: 60%;
  img {
    height: 100%;
  }
}

.card-product {
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  gap: 15px;
  width: 100%;
  height: wmax(345);
  padding: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  transition: .5s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1) inset;
    transform: scale(0.98)
  }
}
</style>
