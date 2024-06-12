<template>
    <div class="container">
        <div class="bg-bgDarkBlue w-[278px]">
            <nav class="list-none text-white flex flex-col gap-5">
                <li v-for="(item, index) in items" :key="index"
                    :class="['flex gap-2 py-5 px-3 flex-col rounded-md', { active: activeIndex === index }]"
                    @click="setActive(index)">
                    <router-link :to="item.link" class="flex items-center gap-2">
                        <img :src="item.icon" alt="" /> {{ item.name }}
                    </router-link>
                    <hr class="mt-2 border-t border-white opacity-20 w-full" />
                </li>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import userIcon from '../../assets/icons/User.svg'
import videoCameraIcon from '../../assets/icons/VideoCamera.svg'
import monitorPlayIcon from '../../assets/icons/MonitorPlay.svg'
import foldersIcon from '../../assets/icons/Folders.svg'
import barcodeIcon from '../../assets/icons/Barcode.svg'

const items = ref([
    { name: "Shaxsiy ma'lumot", link: "#", icon: userIcon },
    { name: "Ishtirok joylarimt", link: "#", icon: videoCameraIcon },
    { name: "Ijodiy videolarim", link: "#", icon: monitorPlayIcon },
    { name: "Loyihalar", link: "#", icon: foldersIcon },
    { name: "QR-Code yuklab olish", link: "#", icon: barcodeIcon }
])

const activeIndex = ref(0)

const setActive = (index) => {
    activeIndex.value = index
}
</script>

<style scoped>
.active {
    background-color: #5425A1;
}
</style>