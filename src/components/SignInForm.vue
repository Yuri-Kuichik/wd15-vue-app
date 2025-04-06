<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      passwordFieldType: 'password',
      passwordMsgError: '',
      emailMsgErr: ''
    }
  },

  methods: {
    switchVisibilityPassword() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },

    login() {
      console.log({
        email: this.email,
        password: this.password,
      })
    }
  },

  computed: {
    isFormCompleted() {
      return this.email.length && this.password.length;
    }
  }
}

</script>

<template>
  <div class="sign-in-form-wrapper">
    <form class="sign-in-form">
      <h2>Sign In</h2>
      <BaseInput 
        class="sign-in-form__input"
        v-model="email"
        label="Email"
        placeholder="Input your email"
        :error-message="emailMsgErr"
      />
      <BaseInput 
        class="sign-in-form__input"
        v-model="password"
        label="Password"
        placeholder="Input your passowrd"
        password-field
        :type="passwordFieldType"
        @switch-type="switchVisibilityPassword"
        :error-message="passwordMsgError"
      />

      <BaseButton 
        class="sign-in-form__button"
        @click.prevent="login" 
        :is-disabled="!isFormCompleted" 
      >
        <span>Send</span>
      </BaseButton>

      <span class="sign-in-form__toggle" @click="$emit('toggle')">registration</span>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  .sign-in-form-wrapper {
    padding: 2rem;
    margin: 0 auto;
    max-width: 480px;
    border: solid 1px rgba(0,0,0,.12);
    border-radius: 8px;
    flex-grow: 1;
  }

  .sign-in-form {
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