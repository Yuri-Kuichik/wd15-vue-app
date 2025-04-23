<script>
import { useFetch } from '@/composables/useFetch';
import PostListItem from '@/components/PostListItem.vue'
import { usePostsStore } from '@/stores/posts';

export default {
  components: {
    PostListItem
  },

  setup() {
    const postsStore = usePostsStore();

    return {
     postsStore
    }
  },

  data() {
    return {
     
    }
  },

  methods: {
    async getPostList(url) {
      await this.postsStore.getPostList(url);
    },

    openPagePost(poistId) {
      console.log('post id: ', poistId)

      this.$router.push({name: 'post', params: {id: poistId} })
    },

    goToNext() {
      this.getPostList(this.postsStore.postListData.next)
    },

    goToPrev() {
      this.getPostList(this.postsStore.postListData.previous)
    },

    searchPosts() {
      this.getPostList();
    }
  },

  computed: {
    postList() {
      return this.postsStore.postListData?.results
    },

    nextPageUrl() {
      return this.postsStore.postListData?.next
    },

    prevPageUrl() {
      return this.postsStore.postListData?.previous
    }
  },

  async created() {
    await this.getPostList();
  }
}

</script>

<template>
  <section class="post-list">
    <div class="pagination-wrapper">
      <BaseButton v-show="prevPageUrl" size="s" class="pagination-button" @click="goToPrev">
        Prev
      </BaseButton>
      <div class="d-flex"></div>
      <BaseButton v-show="nextPageUrl" size="s" class="pagination-button" @click="goToNext">
        Next
      </BaseButton>
    </div>

    <div class="post-list__search-wrapper">
      <BaseInput 
        class="post-list__search-input" 
        placeholder="Input post text"
        v-model="postsStore.searchString"
      />
      <BaseButton class="post-list__search-button" @click="searchPosts">
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

  .pagination-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .pagination-button {
    max-width: 150px;
  }
}

</style>