<script setup lang="ts">
const route = useRoute();

const productsStore = useProductsStore();

const { getProductById } = storeToRefs(useProductsStore());

// const titleProduct = computed(() => (route.params.title as string).replace(/-/g, " "))

const id = computed(() => route.params.id);
const hasProduct = computed(() => (getProductById.value.title ? false : true));
const discont = computed(
  () =>
    (getProductById.value.price -
      (getProductById.value.price * getProductById.value.discountPercentage) /
        100) *
    int.value
);

const round_mod = (value: number) => Math.round(value * 100) / 100; // округление до двух знаков после запятой

const int = ref(1);

const countPlus = () => ++int.value;
const countMinus = () => (int.value <= 1 ? int.value : --int.value);

onMounted(async () => await productsStore.loadProduct(id.value as number));
</script>

<template>
  <div class="content">
    <UIPreloader v-if="hasProduct" />
    <div class="parent" v-else>
      <div class="bread-crumbs">
        Home / {{ getProductById.category }} / {{ getProductById.title }}
      </div>
      <div class="div2 title">Категории</div>
      <div class="div3 title">{{ getProductById.title }}</div>
      <div class="div4 center">
        <NuxtImg :src="getProductById.images[0]" />
      </div>
      <div class="div5">
        <span class="title-main">{{ getProductById.title }}</span>
        <div>
          <span class="price-discont"
            >{{ getProductById.price }}<span>&nbsp;₽</span></span
          ><span class="price"
            >&nbsp;{{ round_mod(discont) }}<span>&nbsp;₽</span></span
          >
        </div>
        <div class="flex-line">
          <div class="int center">{{ int }}</div>
          <div>
            <div class="count center" @click="countPlus">+</div>
            <div class="count center" @click="countMinus">-</div>
          </div>
          <div class="btn">В корзину</div>
          <div class="int center fav">
            <svg viewBox="0 0 23 23" width="26px" height="26px" fill="#fff">
              <path
                d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="flex-column">
        <span><span class="gray">Код:</span> {{ getProductById.id }}</span>
        <span><span class="gray">Баллы:</span> {{ getProductById.id }}</span>
        <span><span class="gray">Производитель:</span> {{ getProductById.brand }}</span>
        </div>
        <div class="btn one-click">Купить в один клик</div>
      </div>
      <div class="div6">6</div>
      <div class="div7">7</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/utils/vars.scss' as *;

.one-click {
  color: $primary-color;
  background-color: #0796071e;
}

.int {
  aspect-ratio: 1 / 1;
  height: 40px;
  border: 2px solid $primary-color;
  font-size: 20px;
  color: $primary-color;
  border-radius: 10px;
}

.fav {
  background-color: $primary-color;
  cursor: pointer;
}

.flex {
  .btn {
    margin-left: 5px;
  }
}
.count {
  font-size: wmax(24);
  font-weight: 900;
  user-select: none;
  padding: 0 5px;
  color: $primary-color;
  border-radius: 5px;
  cursor: pointer;
}

.content {
  margin-top: 150px;
}

.title {
  color: $primary-color;
  font-size: wmax(20);
  font-weight: 700;
  letter-spacing: 0.4px;
}

.parent {
  display: grid;
  grid-template-columns: 0.5fr 1.2fr 0.8fr;
  gap: 8px;
}

.bread-crumbs {
  grid-column: span 3 / span 3;
  color: gray;
  font-size: wmax(15);
}

.div2 {
  grid-row: span 4 / span 4;
  grid-row-start: 2;
  background-color: rgb(210, 250, 237);
}

.div3 {
  grid-column: span 2 / span 2;
  grid-row-start: 2;
}

.div4 {
  grid-column-start: 2;
  grid-row-start: 3;
}

.div5 {
  display: flex;
  flex-direction: column;
  gap: 30px;
  grid-column-start: 3;
  grid-row-start: 3;
  padding: 10px;
}

.title-main {
  font-size: wmax(32);
  font-weight: 700;
}

.price {
  font-size: wmax(54);
  font-weight: 400;
  color: #007800;
}

.price-discont {
  font-size: wmax(24);
  font-weight: 400;
  text-decoration: line-through;
  color: gray;
}

.gray {
  font-size: wmax(20);
  color: #999;
}

.div6 {
  grid-column: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 5;
}

.div7 {
  grid-column: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 4;
}
</style>
