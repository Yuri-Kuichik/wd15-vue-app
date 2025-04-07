<script>
import { formMixin } from '@/composables/formMixin.js';

export default {
  mixins: [formMixin],
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
    switchPasswordVisibility() {
      this.passwordFieldType = this.switchPasswordType(this.passwordFieldType);
    },

    send() {
      this.sendForm({
            email: this.email,
            password: this.password,
          }
      )
    },

  },

  computed: {
    isFormUncompleted() {
      return this.isFormHasEmptyField([this.email, this.password]);
    }
  }

}
</script>

<template>
  <div class="sign-in-form-wrapper d-flex d-flex_jcc">
    <form class="sign-in-form">
      <h2 class="sign-in-form__header">Sign In</h2>
      <BaseInput
          label="Email"
          v-model="email"
          type="email"
      />
      <BaseInput
          label="Password"
          :type="passwordFieldType"
          password-field
          v-model="password"
          @switch-type="switchPasswordVisibility"
      />
      <BaseButton
          @click.prevent="send"
          :is-disabled="isFormUncompleted"
      >
        <span>Sign in</span>
      </BaseButton>
    </form>

  </div>
</template>

<style lang="scss" scoped>
.sign-in-form-wrapper {
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 8px;
  width: 480px;
  margin: 0 auto;
  padding: 15px;

  .sign-in-form {
    max-width: 400px;
    flex-grow: 1;

    &__header{
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