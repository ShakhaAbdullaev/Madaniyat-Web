<template>

    <div class="relative">

        <Swiper ref="mySwiper" :slidesPerView="1" :loop="true" @slideChange="onSlideChange"
            :autoplay="{ delay: 3000, disableOnInteraction: false }" :modules="[Autoplay]">

            <SwiperSlide v-for="(slide, index) in slides" :key="index">

                <div class="bg-image" :style="{ backgroundImage: 'url(' + slide.image + ')' }">
                    <div class="container pt-72">
                        <div class="flex gap-4 items-center">
                            <img :src="slide.icon" alt="#" class="text-white">
                            <p class="text-6xl font-bold text-white">{{ slide.title }}</p>
                        </div>
                    </div>

                </div>

            </SwiperSlide>

            <hr class="border border-1 border-white absolute bottom-52 left-0 right-0 z-30">


            <div class="container absolute bottom-12 left-0 right-0 z-30">

                <p class="text-white text-3xl font-semibold w-[470px]">Xoziroq o’z istedodingni namoyon et, ovoz to’pla
                    <span class="bg-purple rounded-tr-xl rounded-bl-xl  px-2 py-1" style="line-height: 200%;">yulduz
                        bo’l!</span>
                </p>

                <RouterLink to="/signin"
                    class="inline-flex items-center gap-2 bg-white py-3 px-7 rounded-md text-purple text-base font-medium hover:bg-slate-200">
                    Ishtirok
                    etish <img src="../../assets/icons/ArrowUpRight-d.svg" alt="">
                </RouterLink>


            </div>

        </Swiper>


    </div>

</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';

//imgs for bg_main
import amaliy from '../../assets/mainBG/amaliy.png'
import raqs from '../../assets/mainBG/raqs.png'
import singer from '../../assets/mainBG/singer.png'
import sirk from '../../assets/mainBG/sirk.png'
import tasviriy from '../../assets/mainBG/tasviriy.png'
import teatr from '../../assets/mainBG/teatr.png'

//icons
import paintsvg from '../../assets/icons/paintsvg.svg'
import amaliysvg from '../../assets/icons/amaliysvg.svg'
import raqssvg from '../../assets/icons/raqssvg.svg'
import music from '../../assets/icons/MusicNotes.svg'
import teatrsvg from '../../assets/icons/teatrsvg.svg'
import { RouterLink } from 'vue-router';




const slides = ref([
    {
        image: amaliy,
        title: 'Amaliy san\'at',
        icon: amaliysvg
    },
    {
        image: raqs,
        title: 'Raqs san\'ati',
        icon: raqssvg
    },
    {
        image: singer,
        title: 'Qo\'shiqchilik san\'ati',
        icon: music
    },

    {
        image: teatr,
        title: 'Teatr san\'ati',
        icon: teatrsvg
    },
    {
        image: tasviriy,
        title: 'Tasviriy san\'at',
        icon: paintsvg
    },

])

</script>

<style scoped>
.image-swiper-container {
    width: 100%;
    height: 100vh;
}

.bg-image {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
}
</style>