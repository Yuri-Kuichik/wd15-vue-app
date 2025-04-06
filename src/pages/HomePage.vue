<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  components: {
    BaseLayout
  },

  data() {
    return {
      count: 0,
      num1: 0,
      num2: 0,
      operator: '+'
    }
  },

  computed: {
    result() {
      const a = parseFloat(this.num1);
      const b = parseFloat(this.num2);
      switch (this.operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Ошибка (деление на 0)';
        default: return 0;
      }
    }
  }
}
</script>

<template>
  <BaseLayout>
    <div style="margin-bottom: 24px;">
      <p>Текущее значение: {{ count }}</p>
      <button class="button" @click="count++">Increase</button>
      <button class="button" @click="count--">Decrease</button>
    </div>

    <div>
      <input class="input" type="number" v-model.number="num1" placeholder="Первое число" />
      <input class="input" type="number" v-model.number="num2" placeholder="Второе число" />

      <div style="display: flex; gap: 8px; margin-bottom: 12px;">
        <button class="button" @click="operator = '+'">+</button>
        <button class="button" @click="operator = '-'">-</button>
        <button class="button" @click="operator = '*'">*</button>
        <button class="button" @click="operator = '/'">/</button>
      </div>

      <p><strong>Result:</strong> {{ result }}</p>
    </div>
  </BaseLayout>
</template>

<style lang="scss" scoped>
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
  max-width: 100%;
  width: 100%;
  height: 48px;
  max-width: 100px;

  &.disabled {
    cursor: cell;
    background: rgba(253, 211, 42, 0.5);
  }
}

.input {
  padding: 8px 12px;
  width: 100%;
  min-height: 32px;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  background: var(--color-white) !important;
  margin-bottom: 12px;
  max-width: 240px;

  &::placeholder {
    color: rgba(0, 0, 0, .26);
  }

  &:focus-visible {
    border-color: rgb(253, 211, 42);
  }
}
</style>