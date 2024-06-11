<template>

  <div :class="['navbar', {'scrolled': isScrolled}]">

    <div class="container mt-3 flex justify-between items-center">
  
        <div class="logo">
  
            <a href="/"><img src="../assets/Main_logo.svg" alt="Logo"></a>
  
        </div>
  
        <div class="list-group">
  
            <ul class="flex gap-7 text-white font-bold ">
  
                <li><a href="#"class="hover:text-primary transition duration-250">Bosh sahifa</a></li>
                <li><a href="#"class="hover:text-primary transition duration-250">Yo’nalishlar</a></li>
                <li><a href="#"class="hover:text-primary transition duration-250">Manzillar</a></li>
                <li><a href="#"class="hover:text-primary transition duration-250">Baholash mezoni</a></li>
                <li><a href="#"class="hover:text-primary transition duration-250">Loyiha haqida</a></li>
  
            </ul>
  
        </div>
  
        <div class="language flex gap-3">
  
            <button :class="['text-white rounded-md py-1 px-2', activeButton === 'uz' ? 'active' : 'inactive']"
              @click="setActiveButton('uz')">Uz</button>
            <button :class="['text-white rounded-md py-1 px-2', activeButton === 'ru' ? 'active' : 'inactive']"
              @click="setActiveButton('ru')">Ru</button>
  
        </div>
  
    </div>

  </div>


</template>

<script setup>
import {ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const handleScroll = () =>{
  isScrolled.value = window.scrollY > 0
}

onMounted(()=>{
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(()=>{
  window.removeEventListener('scroll', handleScroll)
})

const activeButton = ref('uz')

const setActiveButton = (lang)=>{
    activeButton.value = lang
}
</script>

<style scoped>
.active {
  background-color: white;
  color: #0B1D36;
}
.inactive {
  color: white;
  background-color: transparent;
}

.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
}

.navbar.scrolled {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
  padding-bottom: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
</style>