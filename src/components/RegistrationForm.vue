<script setup>
import { shallowRef, computed } from 'vue';
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore();

const name = shallowRef(''),
      email = shallowRef(''),
      password = shallowRef(''),
      courseGroupId = shallowRef(15),
      emailMsgErr = shallowRef(''),
      passwordMsgError = shallowRef(''),
      passwordFieldType = shallowRef('password'),
      isShowActivateForm = shallowRef(false),
      activateUrl = shallowRef('');

const isFormCompleted = computed(() => {
  const arr = [name.value, email.value, password.value, courseGroupId.value]

  return arr.every( item => !!item.toString().length ) 
})

function switchVisibilityPassword() {
  passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password'
}

function createUser() {
  const data = {
    username: name.value,
    email: email.value,
    password: password.value,
    course_group: courseGroupId.value
  }

  authStore.createUser(data)
}

// после регистрации и того, как пришло письмо с url на почту, и вы сохранили этот url здесь в state -> url, 
    // отправляем полученные данные на сервер для активации профиля
function activateUser() {
  const data = getDataUserFromUrl();

  authStore.activateUser(data)
}

 // этот метод для получения нашего uid и token в формате объекта из строки url
  // этот url вам должет придти на почту после регистрации. 
  // Пример: 'https://studapi.teachmeskills.by//activate/ODYwNw/ccdl27-bd7b740f22b991613865d1d739d5abba'
  function getDataUserFromUrl() {
    const str = activateUrl.value.split('activate/')[1]

    const uid = str.split('/')[0]
    const token = str.split('/')[1]

    return {uid, token}
  }

  function showActivateForm() {
    isShowActivateForm.value = true;
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
        @click.prevent="showActivateForm" 
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