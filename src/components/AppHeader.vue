<template>
    <div class="app-header">
        <BaseLayout class="header-section">
            <img class="logo" src="/src/assets/logo.svg" alt="logo Vue">
            <nav class="d-flex">
              <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/counter">Counter</RouterLink>
                <RouterLink to="/calculator">Calculator</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/login">Login</RouterLink>
            </nav>
        </BaseLayout>
    </div>
</template>

<script>
import BaseLayout from './BaseLayout.vue';

export default {
    components: { BaseLayout }
}
</script>

<style scoped>
.app-header {
  background: var(--color-background-header);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-section {
    display: flex;
    align-items: center;
    padding: 1rem;
}

.logo {
    width: 30px;
    height: auto;
    margin-right: 1.5rem;
}

nav {
  width: 100%;
  font-size: 14px;
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

@media (min-width: 1024px) {
  nav {
    text-align: left;
    font-size: 1rem;
  }
}
</style>