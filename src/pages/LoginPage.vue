<script>
import SignInForm from '@/components/SignInForm.vue';
import RegistrationForm from '@/components/RegistrationForm.vue'

export default {
  components: {
    SignInForm, 
    RegistrationForm
  },

  data() {
    return {
      currentComponent: 'SignInForm',
    }
  },

  methods: {
    toggleComponent() {
      this.currentComponent = this.isSignInForm ? 'RegistrationForm' : 'SignInForm'
    }
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