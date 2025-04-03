<script>
export default {
  data() {
    return {
      
    }
  },

  props: {
    model: {
      type: Object,
      requerded: true
    }
  },

  created() {
    
  }
}

</script>

<template>
  <div class="post-list-item">
    <div class="post-list-item__content">
      <h2 class="post-list-item__title">{{ model?.title }}</h2>
      <p class="post-list-item__description">{{ model?.description }}</p>
    </div>
    <img :src="model?.image" alt="post image">
  </div>
</template>

<style>
  .post-list-item {
    margin-bottom: 24px;
  }

  .content {
    flex-grow: 1;
  }

  .post-image {
    width: 200px;
  }
</style>

<style lang="scss" scoped>
.post-list-item {
  display: flex;
  max-width: 100%;
  margin-bottom: 20px;
  cursor: pointer;

  &__content {
    flex-grow: 1;
  }

  &__title {
    text-align: center;
  }

  &__description {
    color: var(--vt-c-black-mute)
  }

  img {
    width: 200px;
    height: fit-content;
  }
}

</style>