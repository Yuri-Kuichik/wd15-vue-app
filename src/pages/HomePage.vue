<script>
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';

export default {
  components: {
    BaseButton,
    BaseInput
  },

  data() {
    return {
      count: 0,
      
      operand1: 0,
      operand2: 0,
      operator: '+',
      operators: ['+', '-', '*', '/']
    }
  },

  computed: {
    result() {
      const a = Number(this.operand1);
      const b = Number(this.operand2);
      
      switch(this.operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Ошибка';
        default: return 0;
      }
    },
    
    activeTab() {
      return this.$route.path.split('/').pop() || 'home';
    }
  },

  methods: {
    increaseCount() {
      this.count++;
    },

    decreaseCount() {
      this.count--;
    },
    
    setOperator(op) {
      this.operator = op;
    }
  }
}
</script>

<template>
  <div class="home-page">
    <div v-if="activeTab === 'home'" class="welcome-section">
      <h2>Welcome</h2>
      <div class="footer">
        <span>TeachMeSkills</span>
      </div>
    </div>

    <div v-if="activeTab === 'counter'" class="counter-section">
      <h2>Counter</h2>
      <div class="value-display">Value: {{ count }}</div>
      <div class="buttons-wrapper">
        <BaseButton 
          textButton="Increase" 
          @click="increaseCount" 
          class="counter-button"
        />
        <BaseButton 
          textButton="Decrease" 
          @click="decreaseCount" 
          class="counter-button"
        />
      </div>
    </div>

    <div v-if="activeTab === 'calculator'" class="calculator-section">
      <h2>Calculator</h2>
      <div class="inputs-wrapper">
        <BaseInput 
          v-model="operand1" 
          type="number" 
          placeholder="First operand"
        />
        <div class="operators">
          <BaseButton
            v-for="op in operators"
            :key="op"
            :textButton="op"
            @click="setOperator(op)"
            :class="{ 'active': operator === op }"
            size="s"
          />
        </div>
        <BaseInput 
          v-model="operand2" 
          type="number" 
          placeholder="Second operand"
        />
      </div>
      <div class="result">
        <h3>Result: {{ result }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 120px);
}

.welcome-section, .counter-section, .calculator-section {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.welcome-section {
  text-align: center;
}

.value-display {
  font-size: 24px;
  margin: 1.5rem 0;
  font-weight: bold;
  color: #333;
}

.buttons-wrapper {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.counter-button {
  min-width: 120px;
}

.inputs-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.operators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.result {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  font-size: 18px;
}

.active {
  background-color: #4CAF50;
  color: white;
}

.footer {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  color: #666;
  text-align: center;
}
</style>