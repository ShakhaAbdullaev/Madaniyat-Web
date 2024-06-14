<template>
    <div class="bg-bgDarkBlue rounded-md h-[320px]">
        <nav class="list-none text-white flex flex-col">
            <li v-for="(item, index) in items" :key="index"
                :class="['flex gap-2 py-5 px-3 flex-col rounded-md', { active: activeIndex === index }]">
                <router-link @click="setActive(index)" :to="item.link" class="flex items-center gap-2">
                    <img :src="item.icon" alt=""/> {{ item.name }}
                </router-link>
            </li>
        </nav>
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
    { name: "Shaxsiy ma'lumotlar", link: "info", icon: userIcon },
    { name: "Ishtirok joylarim", link: "participantPlace", icon: videoCameraIcon },
    { name: "Ijodiy videolarim", link: "videos", icon: monitorPlayIcon },
    { name: "Loyihalar", link: "projects", icon: foldersIcon },
    { name: "QR-Code yuklab olish", link: "qrcode", icon: barcodeIcon }
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