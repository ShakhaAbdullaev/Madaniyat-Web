<template>
  <Navbar />
  <Info />
  <div class="container mb-10">

    <div class=" flex  w-full gap-4">

      <Sidebar />

      <div class="grow bg-bgDarkBlue w-auto py-5 px-7 rounded-md">
        <router-view>
        </router-view>
      </div>

    </div>

  </div>

  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../../layouts/Navbar.vue';
import Info from '../../components/profile/Info.vue';
import Sidebar from '../../components/profile/Sidebar.vue';
import Footer from '../../layouts/Footer.vue';
</script>
