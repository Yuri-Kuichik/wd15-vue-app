<script>
import SignInForm from "@/components/SignInForm.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";

export default {
  components: {
    SignInForm,
    RegistrationForm,
  },
  data() {
    return {
      currentComponent: 'RegistrationForm',
      inactiveComponent: 'Go to Sign In Form',
    }
  },
  methods: {
    toggleForms() {
      this.currentComponent = this.currentComponent === 'RegistrationForm' ? 'SignInForm' : 'RegistrationForm';
      this.inactiveComponent = this.currentComponent === 'RegistrationForm' ? 'Go to Sign In Form' : 'Go to Registration Form';
    }
  }
}
</script>

<template>
  <BaseLayout>
    <div class="form-wrapper d-flex d-flex_jcc d-flex_fdc">
      <span class="form-toggle d-flex " @click="toggleForms"> {{ inactiveComponent }}</span>
      <component :is="currentComponent"/>
    </div>
  </BaseLayout>
</template>


<style lang="scss" scoped>
.form-wrapper {
  align-items: center;
  max-width: 480px;
  margin: 0 auto;

  .form-toggle {
    background-color: var(--color-white);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: none;
    border-radius: 8px;
    padding: 2px 15px;
    border-bottom: none;
    align-self: end;
  }
}
</style>