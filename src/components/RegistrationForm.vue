<script>

export default {

  data() {
    return {
      name: '',
      courseGroupId: 15
    }
  },

  methods: {
    
  },

  computed: {
    
  }
}

</script>

<template>
  <div class="registration-form-wrapper">
    <form class="registration-form">
      <h2>Registration</h2>
      <BaseInput 
        class="registration-form__input" 
        v-model="name"
      />

      <span class="registration-form__toggle" @click="$emit('toggle')">sign in</span>

    </form>
  </div>
</template>

<style lang="scss" scoped>
  .registration-form-wrapper {
    padding: 2rem;
    margin: 0 auto;
    max-width: 480px;
    border: solid 1px rgba(0,0,0,.12);
    border-radius: 8px;
  }

  .registration-form {
    padding-top: 1rem;

    h2 {
      text-align: center;
    }

    &__input {
      margin-top: 20px;
    }

    &__button {
      margin-top: 32px;
      margin-bottom: 16px;
    }

    &__toggle {
      color: var(--color-primary);
      cursor: pointer;
    }
  }

</style>