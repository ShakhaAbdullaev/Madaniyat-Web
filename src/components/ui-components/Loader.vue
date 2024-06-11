<template>
    <div v-if="loading" class="loader-bar"></div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    loading: {
      type: Boolean,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  @keyframes load {
    0% {
      left: 0;
      width: 0;
    }
    50% {
      left: 25%;
      width: 50%;
    }
    100% {
      left: 100%;
      width: 0;
    }
  }
  
  .loader-bar {
    @apply fixed top-0 left-0 h-1 bg-blue-500 z-50;
    animation: load 2s linear infinite;
  }
  </style>
  