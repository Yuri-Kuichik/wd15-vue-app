<script>
import PostListItem from "@/components/PostListItem.vue";

export default {
  components: {
    PostListItem,
  },
  props: [`searchText`],
  data() {
    return {
      postListData: [],
      limit: 5,
    }
  },

  methods: {
    async getPostList(search = this.searchText, limit = this.limit) {
      try {
        this.loading = true;

        const response = await fetch(`https://studapi.teachmeskills.by/blog/posts?author__course_group=15&limit=${limit}&search=${search}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()

        this.postListData = data.results
      } catch (error) {
        console.log(error.message)
      }
    },

    openPagePost(postId) {
      this.$router.push({ name: 'post', params: { id: postId } });
    }
  },

  watch: {
    searchText(newSearchQuery) {
        this.getPostList(newSearchQuery);
    }
  },

  async created() {
    await this.getPostList();
  }
}

</script>

<template>
  <section>
    <template v-if="postListData.length">
      <div v-for="post in postListData" :key="post.id">
        <PostListItem :model="post" @click="openPagePost(post.id)"></PostListItem>
      </div>
    </template>
    <template v-else>
      <div>Посты не найдены.</div>
    </template>
  </section>
</template>