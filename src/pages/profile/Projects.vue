<template>
    <div>
        <h1 class="text-white font-bold mb-5">Loyihalar</h1>

        <hr class="border border-1 border-grey opacity-20">

        <div class="flex flex-col justify-center items-center">

            <div v-if="error" class="flex justify-center items-center flex-col h-[50vh]">
                <ErrorComponent :image="errorImage" :message="errorMessage" :errorMessage="additionalMessage" />
            </div>

            <Button class="bg-white text-[#5425A1] flex gap-2 rounded-md font-semibold">Loyiha yuklash <img src="../../assets/icons/DownloadSimple.svg" alt=""></Button>

        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Button from '../../components/ui-components/Button.vue'
import ErrorComponent from '../../components/profile/Error.vue'
import AccountService from '../../service/account.js'
import ErrorIMG from '../../assets/project.png';

const error = ref(false)
const errorMessage = ref('')
const additionalMessage = ref('')
const errorImage = ref('')

const fetchUserData = async () => {
    try {
        const response = await AccountService.GetUserInfo()
        user.value = response.data
    } catch (e) {
        error.value = true
        errorMessage.value = 'Ma’lumot topilmadi'
        additionalMessage.value = 'Siz quyidagi tugmani bosish orqali loyihalar yuklashingiz mumkin '
        errorImage.value = ErrorIMG
    }
}

onMounted(fetchUserData)
</script>

<style scoped></style>