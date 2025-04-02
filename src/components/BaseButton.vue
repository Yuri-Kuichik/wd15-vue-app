<template>
  <button class="base-button" :class="rootClass" @click="$emit(customEvent)">
    <VueSpinner v-if="loading"/>
    <span v-else>
            {{ textButton }}
        </span>
  </button>
</template>

<script setup>
import {computed} from 'vue'

import VueSpinner from './VueSpinner.vue';

const props = defineProps({
  customEvent: {
    type: String,
    default: 'customEvent'
  },
  textButton: {
    type: String,
    default: 'Click me'
  },
  size: {
    type: String,
    default: 'm'
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const rootClass = computed(() => {
  return {[`base-batton_size--${props.size}`]: true}
})

</script>

<style scoped>
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  background: rgb(253, 211, 42);
  color: rgb(7, 7, 7);
  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  height: 48px;
}

.base-button:hover {
  opacity: 0.9;
}

.base-button_size--s {
  height: 36px;
}

.base-button_size--m {
  height: 42px;
}

.base-button_size--l {
  padding: 0 16px;
  height: 48px;
}


</style>
