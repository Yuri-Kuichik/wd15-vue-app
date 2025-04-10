<script>

export default {
  data() {
    return {
      postData: null,
    }
  },
  methods: {
    async getPost(id) {
      await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}`)
          .then(response => response.json())
          .then(data => this.postData = data);
    }
  },

  async created() {
    await this.getPost(this.$route.params.id);
  },


}
</script>

<template>
  <BaseLayout>
    <div>
      <h1> {{ postData?.title}}</h1>
      <img :src="postData?.image" :alt="postData?.id"/>
      <p>{{ postData?.text}}</p>
      <span> {{ postData?.date}}</span>
    </div>
  </BaseLayout>
</template>

<style scoped lang="scss">
h1 {
  text-align: center;
}

img{
  display: block;
  margin: 0 auto;
}

</style>