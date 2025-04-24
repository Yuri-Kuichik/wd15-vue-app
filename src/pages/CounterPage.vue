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

function darkTheme() {
  document.querySelector('html').classList.add('dark')
}

function whiteTheme() {
  document.querySelector('html').classList.remove('dark')
}
</script>

<template>
  <BaseLayout>
    <el-button type="danger" circle>
      <el-icon :size="size" :color="color">
        <Delete />
      </el-icon>
    </el-button>
    <el-button @click="whiteTheme">White theme</el-button>
    <el-button @click="darkTheme">Dark theme</el-button>
    <el-button @click="darkTheme">
      <el-icon :size="size" :color="color">
        <Edit />
      </el-icon>
    </el-button>



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
