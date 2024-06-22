<template>
  <div class="relative">
    <slot name="input"></slot>
    <vc-date-picker v-if="showCalendar" v-model="selectedDate" color="blue" is-inline @update:selected="onDateSelected"
      @month-changed="showCalendar = true" @year-changed="showCalendar = true"
      class="absolute top-0 left-0 mt-2 z-30" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref(null);
const showCalendar = ref(false);

const onDateSelected = (date) => {
  selectedDate.value = date;
  showCalendar.value = false;
};  
</script>

<style scoped></style>