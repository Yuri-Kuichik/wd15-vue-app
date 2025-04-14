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
      postsLimit: 4,
      searchString: '',
      courseGroupId: 15
    }
  },

  methods: {
    async getPostList(url) {
      const pamarsStr = this.getPostListParams(url)
      const urlDefault = `https://studapi.teachmeskills.by/blog/posts${pamarsStr}`

      this.fetchData(urlDefault)

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

    getPostListParams(url) {
      if (url) { 
        return `?${url?.split('?')[1]}`;
      }

      const paramsData = {
        search: this.searchString, 
        limit: this.postsLimit, 
        author__course_group: this.courseGroupId
      }
      let str = ''
      let arr = Object.keys(paramsData).reduce((acc, param) => {
          return paramsData[param] ? [...acc, `${param}=${paramsData[param]}`] : acc
      }, [])
  
      if (arr.length) {
          str = '?' + arr.join('&')
      }

      return str
    },

    openPagePost(poistId) {
      console.log('post id: ', poistId)

      this.$router.push({name: 'post', params: {id: poistId} })
    },

    goToNext() {
      this.getPostList(this.data.next)
    },

    goToPrev() {
      this.getPostList(this.data.previous)
    },

    searchPosts() {
      this.getPostList();
    }
  },

  computed: {
    postList() {
      return this.data?.results
    },

    nextPageUrl() {
      return this.data?.next
    },

    prevPageUrl() {
      return this.data?.previous
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
        v-model="searchString"
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