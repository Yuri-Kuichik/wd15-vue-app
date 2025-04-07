<script>
export default {
  data() {
    return {
      postData: null
    }
  },

  methods: {
    async getPost(id) {
      await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}`)
        .then(response => response.json())
        .then(json => this.postData = json );
    }
  },

  async created() {
    console.log('router: ', this.$router)
    console.log('route: ', this.$route)

    await this.getPost(this.$route.params.id)
  },
}
</script>



<template>
  <BaseLayout>
    <div>
      <h1>{{ postData?.title }}</h1>
      <div class="image-wrapper">
        <img :src="postData?.image" alt="post image">
      </div>
      
      <p>{{ postData?.text }}</p>
      <span>{{ postData?.date }}</span>
    </div>
  </BaseLayout>
</template>

<style scoped>
h1, .image-wrapper {
  text-align: center;
}
</style>