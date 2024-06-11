<template>
    <div class="my-11">

        <div class="container mb-14">

            <h1 class="text-white font-bold text-4xl mb-7">Bizning hamkorlar</h1>

            <Swiper :spaceBetween="30" :autoplay="{ delay: 0, disableOnInteraction: true,}"
                :modules="[Autoplay]" :loop="true" :speed="5000"
                :breakpoints="{
                    320: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    }
                }"
                class="mySwiper">

                <SwiperSlide v-for="photo in photos">

                    <img :src="`src/assets/sponsors/${photo}`" alt=""
                        class="bg-customGrey w-full md:h-32 py-7 px-6 rounded-md">

                </SwiperSlide>

            </Swiper>

        </div>


    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules'

import "swiper/css"


const photos = [
    "Skrill.svg",
    "square.svg",
    "opensea.svg",
    "Skrill.svg",
    "square.svg",
    "opensea.svg",
    "Skrill.svg",
    "square.svg",
    "opensea.svg",
]
</script>

<style scoped></style>