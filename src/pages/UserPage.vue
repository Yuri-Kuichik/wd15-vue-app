<script>
import { useAuthStore } from '@/stores/auth';

export default {
  setup() {
    const authStore = useAuthStore()

    return { authStore }
  },

  data() {
    return {
      isShowForm: false,
      newEmail: '',
      password: ''
    }
  }, 

  methods: {
    openFormNewEmail() {
      this.isShowForm = true;
    },

    changeEmail() {
      this.authStore.setNewEmail(this.password, this.newEmail)
    }
  }
}
</script>

<template>
  <BaseLayout class="login-page">
    <h1>User page</h1>

    <BaseButton @click="openFormNewEmail">
      <span>Change email</span>
    </BaseButton>

    <form v-if="isShowForm" class="sign-in-form">
      <h2>Sign In</h2>
      <BaseInput 
        class="sign-in-form__input"
        v-model="newEmail"
        label="Email"
        placeholder="Input your email"
        name="email"
      />
      <BaseInput 
        class="sign-in-form__input"
        v-model="password"
        label="Password"
        placeholder="Input your passowrd"
        name="password"
      />

      <BaseButton 
        class="sign-in-form__button"
        @click.prevent="changeEmail"  
        :loading="authStore.loading"
      >
        <span>Send</span>
      </BaseButton>
    </form>

  </BaseLayout>
</template>
