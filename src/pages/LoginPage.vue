<script>;
// import SignInForm from '@/components/SignInForm.vue';
// import RegistrationForm from '@/components/RegistrationForm.vue'

export default {
  components: {
    // SignInForm,
    // RegistrationForm
  },

  data() {
    return {
      currentComponent: 'RegistrationForm',
    }
  },

  methods: {
    toggleComponent() {
      this.currentComponent = this.currentComponent === 'SignInForm' ? 'RegistrationForm' : 'SignInForm'
    }
  },

  computed: {
    
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