<template>
  <Navbar />
  <Info />
  <Sidebar />

</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../../layouts/Navbar.vue';
import Info from '../../components/profile/Info.vue';
import Sidebar from '../../components/profile/Sidebar.vue';
</script>

<style scoped></style>