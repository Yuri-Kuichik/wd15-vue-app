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
      } finally {
        this.loading = false;
      }
    }
  },

  watch: {
    searchText(newQuery) {
        this.getPostList(newQuery);
    }
  },

  async created() {
    await this.getPostList();
  }
}

</script>

<template>
  <section>
    <div v-for="post in postListData" :key="post.id">
      <PostListItem :model="post"></PostListItem>
    </div>
    <div v-if="!postListData.length">Посты не найдены.</div>
  </section>
</template>