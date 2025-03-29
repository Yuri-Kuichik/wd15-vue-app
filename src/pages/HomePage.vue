<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  components: {
    BaseLayout
  },

  data() {
    return {
      count: 0
    }
  },

  methods: {
    
  },

  computed: {
    
  }
}
</script>

<template>
  <BaseLayout>
    <button @click="count++">Вы нажали на меня {{ count }} раз.</button>

    <!-- Здесь ваш код Counter и Calculator -->
  </BaseLayout> 
</template>



<style lang="scss" scoped>
  button {
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

    &.disabled {
      cursor: cell;
      background: rgba(253, 211, 42, 0.5);
    }
  }

  input {
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