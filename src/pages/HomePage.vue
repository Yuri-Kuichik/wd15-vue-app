<script>
import { useMounted } from '@/composables/useMounted';

import PostList from '@/components/PostList.vue';
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import VueSpinner from '@/components/VueSpinner.vue';

export default {
  components: {
    BaseButton,
    BaseInput,
    PostList,
    VueSpinner
  },

  setup() {
    const { isMounted } = useMounted();

    return { isMounted }
  },
  data(){
      return {
        searchTextInput: '',
        buttonName: 'Search',
        button_size: 's',
        searchQuery: '',
        loading: false
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
    <PostList v-if="isMounted && !loading" :searchText="searchQuery"/>
    <div v-else class="spinner-wrapper d-flex d-flex_jcc d-flex_aic">
      <VueSpinner size="l"/>
    </div>
  </BaseLayout>
</template>


<style lang="scss" scoped>
  .spinner-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

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