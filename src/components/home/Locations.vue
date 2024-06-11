<template>
    <div class="mt-20 relative">

        <img src="../../assets/pattern2.svg" alt="" class="absolute left-0 bottom-0 -z-10">
        <img src="../../assets/pattern3.svg" alt="" class="absolute right-0 top-60 -z-10">

        <div class="container mb-10 flex justify-between">

            <div>

                <h1 class="text-white text-4xl font-bold mb-12">Ijodiy manzillar</h1>

                <img src="../../assets/map.svg" alt="">

            </div>

            <div class="w-[600px]">

                <p class="text-lg text-white mb-7">Madaniyat vazirligi va Turizm qo‘mitasi tomonidan ijodkorlarning
                    ko‘cha sanʼati va musiqasi konsert dasturlari muvofiqlashtirish</p>

                <div class="flex flex-col w-[600px] mb-4">

                    <label for="regions" class="text-white text-lg mb-4">Manzilni tanlang</label>

                    <select v-model="selectRegion" @change="handleChange"
                        class="rounded-md bg-grey bg-opacity-30 text-white py-3 px-4 border-2 border-customGrey outline-none">

                        <option v-for="region in regions" :key="region" value="region">

                            {{ region }}

                        </option>

                    </select>

                </div>

                <div class="bg-grey p-4 bg-opacity-30 rounded-md flex justify-between items-center">

                    <div class="">

                        <p class="text-slate-300 mb-3 text-sm">Qoraqalpog’iston Respublikasi</p>

                        <p class="text-white mb-3 text-lg">Toshkent Shahri Madaniyat vazirligi</p>

                        <p class="text-base text-slate-300 mb-16">O’zbekiston ko’chasi, 25-A uy</p>


                        <button class="inline-flex bg-white text-primary px-7 py-3 rounded-md gap-2 hover:bg-slate-100">Xaritada ko’rish <img src="../../assets/icons/location.svg" alt=""></button>
                    </div>

                    <img src="../../assets/madaniyat.png" alt="">

                </div>

            </div>



        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const selectRegion = ref('Toshkent shahri');
const regions = ref(['Toshkent shahri', 'Samarqand', 'Buxoro', 'Navoiy', 'Xorazm', 'Qoraqalpog‘iston Respublikasi', 'Andijon', 'Namangan', 'Farg‘ona', 'Sirdaryo', 'Jizzax', 'Qashqadaryo', 'Surxondaryo', 'Toshkent viloyati'])

const handleChange = () => {
    selectRegion.value
}
</script>

<style scoped></style>