<template>
    <div class="app-header">
        <BaseLayout class="header-section">
            <img class="logo" src="/src/assets/logo.svg" alt="logo Vue">
            <template v-if="is_auth">
              <nav class="d-flex">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/counter">Counter</RouterLink>
                <RouterLink to="/calculator">Calculator</RouterLink>
                <RouterLink to="/user">User</RouterLink>
              </nav>
              <div class="btn-sign-out" @click="signOut"><b>Sign out</b></div>
            </template>
        </BaseLayout>
    </div>
</template>

<script>
import BaseLayout from './BaseLayout.vue';
import { useAuthStore } from '@/stores/auth';

export default {
  setup() {
    const useAuth = useAuthStore();

    return { useAuth }
  },

  components: { BaseLayout },

  data() {
    return{
      is_auth: false
    }
  },

  methods: {
    signOut() {
      this.useAuth.signOut();

      this.$router.push('/login')
    }
  },

  watch: {
    useAuth: {
      handler(state) {
        this.is_auth = state.isAuth()
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.app-header {
    background: var(--color-background-header);
}

.header-section {
    display: flex;
    align-items: center;
    padding: 1rem;
}

.logo {
    width: 30px;
    height: auto;
    margin-right: 1rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.btn-sign-out {
  cursor: pointer;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    font-size: 1rem;
  }
}
</style>