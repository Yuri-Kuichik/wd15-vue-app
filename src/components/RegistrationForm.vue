<script>
import {switchPasswordType, sendForm, isFormHasEmptyField} from '@/composables/form.js';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      passwordFieldType: 'password',
      passwordMsgError: '',
      course_group: 15,
    }
  },

  methods: {
    switchPasswordVisibility() {
      this.passwordFieldType = switchPasswordType(this.passwordFieldType);
    },

    send() {
      sendForm('https://studapi.teachmeskills.by/auth/users/',{
        username: this.username,
        email: this.email,
        password: this.password,
        course_group: this.course_group,
      })
    },

  },

  computed: {
    isFormUncompleted() {
      return isFormHasEmptyField([this.username, this.email, this.password, this.course_group]);
    }
  }
}
</script>

<template>
  <div class="registration-form-wrapper d-flex d-flex_jcc">
    <form class="registration-form">
      <h2 class="registration-form__header">Registration</h2>
      <BaseInput
          label="Name"
          v-model.trim="username"
      />
      <BaseInput
          label="Email"
          v-model.trim="email"
          type="email"
      />
      <BaseInput
          label="Password"
          :type="passwordFieldType"
          password-field
          v-model="password"
          @switch-type="switchPasswordVisibility"
      />
      <BaseInput
          label="Group number"
          v-model.number="course_group"></BaseInput>
      <BaseButton
          @click.prevent="send"
          :is-disabled="isFormUncompleted"
      >
        <span>Register</span>
      </BaseButton>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.registration-form-wrapper {
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 8px;
  width: 480px;
  margin: 0 auto;
  padding: 15px;

  .registration-form {
    max-width: 400px;
    flex-grow: 1;

    &__header {
      text-align: center;
      margin: 20px;
    }

    button {
      margin: 15px 0;
      width: 100%;
    }
  }
}
</style>