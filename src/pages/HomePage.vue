<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  components: {
    BaseLayout
  },

  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <BaseLayout>
    <button @click="count++">Вы нажали на меня {{ count }} раз.</button>
  </BaseLayout> 
</template>