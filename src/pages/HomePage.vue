<script>
import PostList from '@/components/PostList.vue';
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton,
    BaseInput,
    PostList,
  },
  data(){
      return {
        searchTextInput: '',
        buttonName: 'Search',
        button_size: 's',
        searchQuery: '',
    }
  },
  methods: {
    filterPostsByQuery() {
      this.searchQuery = this.searchTextInput;
    }
  }
}
</script>

<template>
  <BaseLayout>
    <div class="search_wrapper d-flex">
      <BaseInput v-model="searchTextInput"/>
      <BaseButton :textButton="buttonName" :size="button_size" @customEvent="filterPostsByQuery" class="base-button_size--s"/>
    </div>
    <PostList :searchText="searchQuery"/>
  </BaseLayout>
</template>


<style lang="scss" scoped>
.search_wrapper{
  column-gap: 10px;
}
.d-flex {
  justify-content: flex-end;

}
  button {
    &.disabled {
      cursor: cell;
      background: rgba(253, 211, 42, 0.5);
    }
  }

  input {
    display: flex;
    width: 100%;
    min-height: 32px;
    border: 1px solid rgba(0,0,0, .2);
    border-radius: 8px;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    background: var(--color-white) !important;
    max-width: 100%;

    &::placeholder {
        color: rgba(0, 0, 0, .26);
    }

    &:focus-visible {
        border-color: rgb(253, 211, 42);
        /* border-color: var(--color-primary); */
    }
  }
</style>