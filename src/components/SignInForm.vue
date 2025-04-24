<script setup>
import { shallowRef, computed } from 'vue';
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore();

const email = shallowRef(''),
      password = shallowRef(''),
      passwordFieldType = shallowRef('');

const isFormCompleted = computed(() => {
  return email.value.length && isPasswordValid.value && isValidEmail()
})

const passwordMsgError = computed(() => {
  return isPasswordValid.value ? '' : 'пароль слишком короткий'
})

const emailMsgError = computed(() => {
  return email.value.length && isValidEmail() ? '' : 'не корректный email'
})

const isPasswordValid = computed(() => {
  return password.value.length > 5
})

function isValidEmail() {
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return EMAIL_REGEXP.test(email.value)
}

function switchVisibilityPassword() {
  passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password'
}

function login() {
  const data = {
    email: email.value,
    password: password.value,
  }

  authStore.signIn(data)
}

</script>

<template>
  <div class="sign-in-form-wrapper">
    <span class="sign-in-form__toggle" @click="$emit('toggle')">registration</span>
    <form class="sign-in-form">
      <h2>Sign In</h2>
      <BaseInput 
        class="sign-in-form__input"
        v-model="email"
        label="Email"
        placeholder="Input your email"
        :error-message="emailMsgError"
        name="email"
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
        name="password"
      />

      <BaseButton 
        class="sign-in-form__button"
        @click.prevent="login" 
        :is-disabled="!isFormCompleted" 
        :loading="authStore.loading"
      >
        <span>Send</span>
      </BaseButton>
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