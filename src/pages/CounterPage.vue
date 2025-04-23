<script setup>
import { ref, computed, shallowRef } from 'vue';

const count = shallowRef(0); // {value: 0}
const title = shallowRef('Counter page');

const increment = () => {
  count.value++
}

function decrement() {
  count.value--
}

const dubleCount = computed(() => {
  return count.value * 2
})
</script>

<template>
  <BaseLayout>
    <h1>{{ title }}</h1>
    <div>Counter: {{ count }}</div>
    <div>Duble counter: {{ dubleCount }}</div>
    <BaseButton class="btn" @click="increment">Increment</BaseButton>
    <BaseButton class="btn" @click="decrement">Decrement</BaseButton>
  </BaseLayout>
</template>

<style scoped>
.btn {
  max-width: 200px;
  margin-top: 20px;
}
</style>
