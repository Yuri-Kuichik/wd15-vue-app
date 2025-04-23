<script>
import { useAuthStore } from '@/stores/auth'

export default {
  setup() {
    const authStore = useAuthStore()

    return { authStore }
  },

  data() {
    return {
      name: '',
      email: '',
      password: '',
      courseGroupId: 15,
      emailMsgErr: '',
      passwordMsgError: '',
      passwordFieldType: 'password',
      isShowActivateForm: false,
      activateUrl: ''
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

      this.authStore.createUser(data);
    },

    // после регистрации и того, как пришло письмо с url на почту, и вы сохранили этот url здесь в state -> url, 
    // отправляем полученные данные на сервер для активации профиля
    async activateUser() {
      const data = this.getDataUserFromUrl();

      this.authStore.activateUser(data)
    },

    // этот метод для получения нашего uid и token в формате объекта из строки url
    // этот url вам должет придти на почту после регистрации. 
    // Пример: 'https://studapi.teachmeskills.by//activate/ODYwNw/ccdl27-bd7b740f22b991613865d1d739d5abba'
    getDataUserFromUrl() {
      const str = this.activateUrl.split('activate/')[1]

      const uid = str.split('/')[0]
      const token = str.split('/')[1]

      return {uid, token}
    },

    showActivateForm() {
      this.isShowActivateForm = true;
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
  <div class="form-wrapper">
    <span class="registration-form__toggle" @click="$emit('toggle')">sign in</span>
    <form v-if="!isShowActivateForm" class="registration-form">
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
        :loading="authStore.loading"
      >
        <span>Send</span>
      </BaseButton>

      <p>
        After successful registration click <b>Activate</b> button 
        to complete registration and activate the profile
      </p>
      <BaseButton 
        class="registration-form__button"
        @click="showActivateForm" 
      >
        <span>Activate</span>
      </BaseButton>
    </form>

    <form v-else class="activate-form">
      <h2>Activate</h2>
      <BaseInput 
        class="activate-form__input" 
        label="Url"
        v-model="activateUrl"
        placeholder="Insert a link from email"
        name="activateUrl"
      />

      <BaseButton 
        class="activate-form__button"
        @click.prevent="activateUser" 
        :loading="authStore.loading"
      >
        <span>Send</span>
      </BaseButton>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  .form-wrapper {
    padding: 2rem;
    margin: 0 auto;
    max-width: 480px;
    border: solid 1px rgba(0,0,0,.12);
    border-radius: 8px;
  }

  .registration-form,
  .activate-form {
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