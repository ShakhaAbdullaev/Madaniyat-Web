<template>

    <input
        class="bg-bgDarkBlue py-[10px] px-[16px] rounded-md outline-none border border-1 border-[#334257] focus:border-primary focus:ring-1 focus:ring-primary text-white"
        :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder" :autocomplete="autocomplete" :id="id" >
        
        </template>
        
        <!-- v-maska :data-maska="mask" -->
<script setup>
import { defineProps } from 'vue';
import { vMaska } from 'maska/vue'

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'text',
    },
    placeholder: {
        type: String,
        default: '',
    },
    autocomplete: {
        type: String,
        default: 'off',
    },
    id: {
        type: String,
        default: '',
    },
    // mask: {
    //     type: String,
    //     default: '',
    // },
});
</script>

<style scoped></style>