<script>
import PostList from '@/components/PostList.vue';

export default {
  components: {
    PostList
  },

  data() {
    return {
      postListData: [],
      limit: 5,
      search: ''
    }
  },

  methods: {
    // этот метод нужно перенести в компонент PostList.vue
    async getPostList(search = this.search, limit = this.limit) {

      try {
        this.loading = true;

        const response = await fetch(`https://studapi.teachmeskills.by/blog/posts?author__course_group=15&limit=${limit}&search'=${search}`)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json()

          this.postListData = data.results
      } catch(error) {
        console.log(error.message)
      } finally {
        this.loading = false;
      }
    }
  },

  computed: {
    
  },

  async created() {
    await this.getPostList();
  }
}
</script>

<template>
  <MyBaseLayout>
    <!-- Здесь можно добавить input (BaseInput) и button (BaseButton) для фильтрации списка по клику на кнопку с текстом 'Search' -->

    <!-- здесь компонент PostList -->
  </MyBaseLayout> 
</template>



<style lang="scss" scoped>
  .button {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    background: rgb(253, 211, 42);
    color: rgb(7, 7, 7);
    border-radius: 8px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    max-width: 100%;
    width: 100%;
    height: 48px;
    max-width: 240px;

    &.disabled {
      cursor: cell;
      background: rgba(253, 211, 42, 0.5);
    }
  }

  .input {
    padding: 8px 12px;
    width: 100%;
    min-height: 32px;
    border: 1px solid rgba(0,0,0, .2);
    border-radius: 8px;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    background: var(--color-white) !important;
    margin-bottom: 12px;
    max-width: 240px;

    &::placeholder {
        color: rgba(0, 0, 0, .26);
    }

    &:focus-visible {
        border-color: rgb(253, 211, 42);
        /* border-color: var(--color-primary); */
    }
  }
</style>