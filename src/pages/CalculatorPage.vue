<script setup>
import { ref, computed } from 'vue';
import { usePostsStore } from '@/stores/posts';
import { useRoute, useRouter } from 'vue-router'

const postsStore = usePostsStore();
const route = useRoute();
const router = useRouter();

console.log(route)
console.log(router)


const valueFirst = ref(0),
      valueSecond = ref(0),
      result = ref(0),
      operator = ref('+');

function getResult() {
  switch(operator.value) {
    case '+': 
    result.value = valueFirst.value + valueSecond.value

    case '-': 
    result.value = valueFirst.value - valueSecond.value

    case '/': 
    result.value = valueFirst.value / valueSecond.value

    case '*': 
    result.value = valueFirst.value * valueSecond.value
  }
}

function isActiveCurrentButton(value) {
  return operator.value === value
}

function changeOperator(value) {
  operator.value = value;
  router.push('/')
}

function getPostList() {
  postsStore.getPostList()
}

const newResult = computed(() => {
  switch(operator.value) {
    case '+': 
    return valueFirst.value + valueSecond.value

    case '-': 
    return valueFirst.value - valueSecond.value

    case '/': 
    return valueFirst.value / valueSecond.value

    case '*': 
    return valueFirst.value * valueSecond.value
  }
})

getPostList()

</script>

<template>
  <BaseLayout class="calculator-page">
    <h1>Calculator page</h1>
    <input type="number" v-model.number="valueFirst"/>
    <input type="number" v-model.number="valueSecond"/>
    
    <BaseButton class="btn" :class="{active: isActiveCurrentButton('+')}" @click="changeOperator('+')">+</BaseButton>
    <BaseButton class="btn" :class="{active: isActiveCurrentButton('-')}" @click="changeOperator('-')">-</BaseButton>
    <BaseButton class="btn" :class="{active: isActiveCurrentButton('/')}" @click="changeOperator('/')">/</BaseButton>
    <BaseButton class="btn" :class="{active: isActiveCurrentButton('*')}" @click="changeOperator('*')">*</BaseButton>

    <!-- <BaseButton class="btn" @click="getResult">result: {{ result }}</BaseButton> -->
     <div>Result: {{ newResult }}</div>
  </BaseLayout>

</template>

<style lang="scss" scoped>
.calculator-page {
  .btn {
    width: 200px;
    max-width: 200px;
    margin-top: 20px;

    &.active {
      border-color: red;
    }
  }
}


</style>