<template>
    <!-- <Loader :loading="isLoading" /> -->
    <Navbar/>
    <MainSection/>
    <Direction/>
    <Participants/>
    <TopVideos/>
    <Locations/>
    <Statistics/>
    <Partners/>
    <Footer/>
</template>

<script setup>
import Navbar from '../layouts/Navbar.vue'
import MainSection from '../components/home/MainSection.vue'
import Direction from '../components/home/Direction.vue';
import Participants from '../components/home/Participants.vue';
import TopVideos from '../components/home/TopVideos.vue';
import Locations from '../components/home/Locations.vue';
import Statistics from '../components/home/Statistics.vue';
import Partners from '../components/home/Partners.vue';
import Footer from '../layouts/Footer.vue';
// import Loader from '../components/ui-components/Loader.vue';
</script>

<style scoped>

</style>