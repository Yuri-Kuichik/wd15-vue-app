<script setup>
import {useAuthStore} from '@/stores/auth';
import {ref} from "vue";

const authStore = useAuthStore(),
    isShowForm = ref(false),
    isShowModal = ref(false),
    newEmail = ref(''),
    password = ref('');

function openFormNewEmail() {
  closeConfirmModalWindow();
  isShowForm.value = true;
}

function closeFormNewEmail() {
  isShowModal.value = false;
}

function openConfirmModalWindow() {
  isShowModal.value = true;
}

async function changeEmail() {
  await authStore.setNewEmail(password.value, newEmail.value);
  closeFormNewEmail();
}

function closeConfirmModalWindow() {
  isShowModal.value = false;
}
</script>

<template>
  <BaseLayout class="login-page">
    <h1>User page</h1>

    <BaseButton @click="openConfirmModalWindow">
      <span>Change email</span>
    </BaseButton>

    <BaseModal v-show="isShowModal">
      <template #header>Вы действительно хотите изменить email?</template>
      <template #action>
        <div class="d-flex">
          <BaseButton @click="openFormNewEmail" class="first-btn">
            <span>Да</span>
          </BaseButton>
          <BaseButton @click="closeConfirmModalWindow">
            <span>Нет</span>
          </BaseButton>
        </div>
      </template>
    </BaseModal>

    <form v-if="isShowForm" class="sign-in-form">
      <h2>Sign In</h2>
      <BaseInput
          class="sign-in-form__input"
          v-model="newEmail"
          label="Email"
          placeholder="Input your email"
          name="email"
      />
      <BaseInput
          class="sign-in-form__input"
          v-model="password"
          label="Password"
          placeholder="Input your passowrd"
          name="password"
      />

      <BaseButton
          class="sign-in-form__button"
          @click.prevent="changeEmail"
          :loading="authStore.loading"
      >
        <span>Send</span>
      </BaseButton>
    </form>

  </BaseLayout>
</template>

<style scoped>
.first-btn {
  margin-right: 12px;
}
</style>
