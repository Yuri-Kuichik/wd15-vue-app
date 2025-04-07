<script>;
import SignInForm from '@/components/SignInForm.vue';
import RegistrationForm from '@/components/RegistrationForm.vue'

export default {
  components: {
    SignInForm, 
    RegistrationForm
  },

  data() {
    return {
      currentComponent: 'RegistrationForm',
    }
  },

  methods: {
    toggleComponent() {
      this.currentComponent = this.isSignInForm ? 'RegistrationForm' : 'SignInForm'
    },

    // перенесите этод метод в RegistrationForm.vue
    async createUser() {
      const data = {
        username: '',
        email: '',
        password: '',
        course_group: 15
      }

      const res = await fetch('https://studapi.teachmeskills.by/auth/users/', {
        method: 'POST',
        headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
        body: JSON.stringify(data)
      })
    },

    // перенесите этод метод в SignInForm.vue
    async login() {
      const data = {
        email: '',
        password: '',
      }

      const res = await fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
        method: 'POST',
        headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
        body: JSON.stringify(data)
      })
    },
  },

  computed: {
    isSignInForm() {
      return this.currentComponent === 'SignInForm'
    }
  }
}
</script>

<template>
  <BaseLayout class="login-page">
    <component :is="currentComponent" @toggle="toggleComponent"/>
  </BaseLayout>
</template>

<style lang=scss scoped>

</style>