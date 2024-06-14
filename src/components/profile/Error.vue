<template>
        <img :src="image" alt="Error image" class="error-image">
        <p class="text-lg font-semibold text-white mb-2">{{ message }}</p>
        <p class="text-white text-sm ">{{ errorMessage }}</p>
</template>

<script setup>
defineProps({
    image: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    errorMessage:{
        type: String,
        required: true
    }
});



</script>

<style scoped>
.error-image {
  max-width: 300px;
  margin-bottom: 20px;
}
</style>