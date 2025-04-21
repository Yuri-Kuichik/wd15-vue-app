<script>
import { usePostsStore } from '@/stores/posts';

export default {
  setup() {
    const postsStore = usePostsStore();

    return { postsStore }
  },

  async created() {
    await this.postsStore.getPost(this.$route.params.id)
  },
}
</script>



<template>
  <BaseLayout>
    <div>
      <h1>{{ postsStore.postData?.title }}</h1>
      <div class="image-wrapper">
        <img :src="postsStore.postData?.image" alt="post image">
      </div>
      
      <p>{{ postsStore.postData?.text }}</p>
      <span>{{ postsStore.postData?.date }}</span>
    </div>
  </BaseLayout>
</template>

<style scoped>
h1, .image-wrapper {
  text-align: center;
}
</style>