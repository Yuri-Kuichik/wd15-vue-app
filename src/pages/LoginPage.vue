<script setup>
import SignInForm from '@/components/SignInForm.vue';
import RegistrationForm from '@/components/RegistrationForm.vue'
import {computed, ref} from "vue";

const currentComponent = ref('SignInForm')
function toggleComponent(){
  currentComponent.value = isSignInForm.value ? 'RegistrationForm' : 'SignInForm';
}
const isSignInForm = computed(() => {
  return currentComponent.value === 'SignInForm';
})
</script>
<template>
  <BaseLayout class="login-page">
    <component :is="isSignInForm ? SignInForm : RegistrationForm" @toggle="toggleComponent"/>
  </BaseLayout>
</template>

<style lang=scss scoped>

</style>