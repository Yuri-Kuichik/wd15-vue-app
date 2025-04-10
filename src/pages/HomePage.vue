<script>
import { useMounted } from '@/composables/useMounted';
import { store } from '@/stores/store';

import PostList from '@/components/PostList.vue';
import VueSpinner from '@/components/VueSpinner.vue';

export default {
  components: {
    PostList,
    VueSpinner
  },

  setup() {
    const { isMounted } = useMounted();

    return { isMounted }
  },

  data() {
    return {
      loading: false,
      store
    }
  },

  methods: {
    
  },

  computed: {
    
  }
}
</script>

<template>
  <BaseLayout>
    <PostList v-if="isMounted && !loading" />
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