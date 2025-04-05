<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  components: {
    BaseLayout
  },

  data() {
    return {
      count: 0,
      num: 0,
      num1: 0,
      num2: 0,
      result: 0,
    }
  },

  methods: {
    addition() {
      this.result = this.num1 + this.num2;
    },
    subtraction() {
      this.result = this.num1 - this.num2;
    },

    division() {
      this.result = this.num1 / this.num2;
    },
    multiplication() {
      this.result = this.num1 * this.num2;
    }


    
  },

  computed: {
    
  }
}
</script>

<template>
  <BaseLayout>
    <button @click="count++">Вы нажали на меня {{ count }} раз.</button>

    <!-- Здесь ваш код Counter и Calculator -->
    <div class="container">
      <button class="button" @click="num++">Increase</button>
      <h3>{{ num }}</h3>
      <button class="button" @click="num--">Decrease</button>
    </div>

    <div class="container">
      <div class="elementContainer">
        <input class="input" type="number" v-model=num1>
        <input class="input" type="number" v-model=num2>
      </div>
      <div class="elementContainer">
        <button class="button" @click="addition">+</button>
        <button class="button" @click="subtraction">-</button>
        <button class="button" @click="division">/</button>
        <button class="button" @click="multiplication">*</button>
      </div>
      <h3>{{ result }}</h3>
      

    </div>
  </BaseLayout> 
</template>



<style lang="scss" scoped>
  h3 {
    text-align: center;
  }
  .container {
    width: 30%;
    margin: 0, auto;
    margin-bottom: 3vh;
  }
  .button {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    background: rgb(253, 211, 42);
    color: rgb(7, 7, 7);
    border-radius: 8px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    width: 100%;
    height: 30px;
    max-width: 240px;

    &.disabled {
      cursor: cell;
      background: rgba(253, 211, 42, 0.5);
    }
  }

  .elementContainer {
    width: 100%;
    justify-content: space-around;
    display: flex;
  }

  .input {
    padding: 8px 12px;
    width: 50%;
    min-height: 32px;
    border: 1px solid rgba(0,0,0, .2);
    border-radius: 8px;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    background: var(--color-white) !important;
    margin-bottom: 12px;
    margin-right: 1vw;
    max-width: 240px;

    &::placeholder {
        color: rgba(0, 0, 0, .26);
    }

    &:focus-visible {
        border-color: rgb(253, 211, 42);
        /* border-color: var(--color-primary); */
    }
  }
</style>