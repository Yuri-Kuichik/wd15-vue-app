<script>
import { useFetch } from '@/composables/useFetch';
import PostListItem from '@/components/PostListItem.vue'

export default {
  components: {
    PostListItem
  },

  setup() {
    const { data, error, loading, fetchData } = useFetch();

    return {
      data, error, loading, fetchData
    }
  },

  data() {
    return {
      postListData: [],
      postsLimit: 5,
      searchString: '',
    }
  },

  methods: {
    async getPostList() {
      const url = `https://studapi.teachmeskills.by/blog/posts?author__course_group=15&limit=${this.postsLimit}&search=${this.searchString}`
      this.fetchData(url)

      // try {
      //   this.loading = true;

      //   const response = await fetch(url)
      //     if (!response.ok) {
      //       throw new Error(`HTTP error! status: ${response.status}`);
      //     }
      //     const data = await response.json()

      //     this.postListData = data.results
      // } catch(error) {
      //   console.log(error.message)
      // } finally {
      //   this.loading = false;
      // }
    },

    openPagePost(poistId) {
      console.log('post id: ', poistId)

      this.$router.push({name: 'post', params: {id: poistId} })
    }
  },

  computed: {
    postList() {
      return this.data?.results
    }
  },

  async created() {
    await this.getPostList();
  }
}

</script>

<template>
  <section class="post-list">
    <div class="post-list__search-wrapper">
      <BaseInput 
        class="post-list__search-input" 
        placeholder="Input post text"
        v-model="searchString"
      />
      <BaseButton class="post-list__search-button" @click="getPostList">
        Search
      </BaseButton>
    </div>

    <div v-for="post in postList" :key='post.id'>
      <PostListItem :model="post" @click="openPagePost(post.id)"/>
    </div>
  </section>

</template>


<style lang="scss" scoped>
.post-list {
  padding: 32px 16px; 
  background-color: rgba(0,0,0, .03);
  border-radius: 8px; 

  &__search-input {
    padding-bottom: 20px;
  }

  &__search-wrapper {
    display: flex; 
    gap: 12px;

    .post-list__search-input {
      flex-grow: 1;
    }

    .post-list__search-button {
      max-width: 200px;
    }
  }

  .limit {
    margin-right: 12px; 
    cursor: pointer;
  }
}

</style>