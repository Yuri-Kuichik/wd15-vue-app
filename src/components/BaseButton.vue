<template>
    <button class="base-button" :class="rootClass" :disabled="isDisabled">
        <VueSpinner v-if="loading" />
        <span v-else>  
            <slot></slot>
        </span>
    </button>  
</template>

<script setup>
import { computed } from 'vue'

import VueSpinner from './VueSpinner.vue';

const props = defineProps({
    size: {
        type: String,
        default: 'm'
    },
    loading: {
        type: Boolean,
        default: false
    },
    isDisabled: {
        type: Boolean,
        default: false
    }
})

const rootClass = computed(() => {
   return { 
        [`base-button_size--${props.size}`]: true,
        ['is-disabled']: props.isDisabled,
    }
})

</script>

<style lang=scss scoped>
.base-button {
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

    &.is-disabled {
        // background: rgba(253, 211, 42, 0.5);
        opacity: 0.5;
        cursor: not-allowed;
    }
}

.base-button:hover {
    opacity: 0.9;
}

.base-button_size--s {
    height: 36px;
}

.base-button_size--m {
    height: 42px;
}

.base-button_size--l {
    padding: 0 16px;
    height: 48px;
}


</style>
