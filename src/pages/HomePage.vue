<script setup>
import { onMounted } from 'vue';
import { useMounted } from '@/composables/useMounted';

import PostList from '@/components/PostList.vue';
import VueSpinner from '@/components/VueSpinner.vue';

const { isMounted } = useMounted();

onMounted(() => {
  console.log('Dom is ready')
}) 
</script>

<template>
  <BaseLayout>
    <PostList v-if="isMounted" />
    <div v-else class="spinner-wrapper d-flex d-flex_jcc d-flex_aic">
      <VueSpinner size="l"/>
    </div>
  </BaseLayout> 
</template>



<style lang="scss" scoped>
  .spinner-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>