<script>

export default {

  data() {
    return {
      name: '',
      email: '',
      password: '',
      courseGroupId: 15,
      emailMsgErr: '',
      passwordMsgError: '',
      passwordFieldType: 'password'
    }
  },

  methods: {
    switchVisibilityPassword() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },

    async createUser() {

      const data = {
        username: this.name,
        email: this.email,
        password: this.password,
        course_group: this.courseGroupId
      }

      await fetch('https://studapi.teachmeskills.by/auth/users/', {
        method: 'POST',
        headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
        body: JSON.stringify(data)
      })
      
    }
  },

  computed: {
    isFormCompleted() {
      const arr = [this.name, this.email, this.password, this.courseGroupId]

      return arr.every( item => !!item.toString().length )
    }
  }
}

</script>

<template>
  <div class="registration-form-wrapper">
    <form class="registration-form">
      <h2>Registration</h2>
      <BaseInput 
        class="registration-form__input" 
        label="Name"
        v-model="name"
        placeholder="Input your name"
        name="userName"
      />

      <BaseInput 
        class="registration-form__input"
        label="Email"
        v-model="email"
        placeholder="Input your email"
        :error-message="emailMsgErr"
        name="email"
      />
      
      <BaseInput 
        class="registration-form__input"
        v-model="password"
        label="Password"
        placeholder="Input your passowrd"
        password-field
        :type="passwordFieldType"
        @switch-type="switchVisibilityPassword"
        :error-message="passwordMsgError"
        name="password"
      />

      <BaseInput 
        label="Course group"
        class="registration-form__input" 
        v-model.number="courseGroupId"
        placeholder="Input your course group id"
        name="courseGroupId"
      />

      <BaseButton 
        class="registration-form__button"
        @click.prevent="createUser" 
        :is-disabled="!isFormCompleted" 
      >
        <span>Send</span>
      </BaseButton>

      <span class="registration-form__toggle" @click="$emit('toggle')">sign in</span>

    </form>
  </div>
</template>

<style lang="scss" scoped>
  .registration-form-wrapper {
    padding: 2rem;
    margin: 0 auto;
    max-width: 480px;
    border: solid 1px rgba(0,0,0,.12);
    border-radius: 8px;
  }

  .registration-form {
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