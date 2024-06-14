<template>
    <div>
        <h1 class="text-white font-bold mb-5">QR-Code yuklab olish</h1>

        <hr class="border border-1 border-grey opacity-20">

        <div>

            <div v-if="error" class="flex justify-center items-center flex-col h-[50vh]">
                <ErrorComponent :image="errorImage" :message="errorMessage" :errorMessage="additionalMessage" />
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ErrorComponent from '../../components/profile/Error.vue'
import AccountService from '../../service/account.js'
import ErrorIMG from '../../assets/folderEmpty.png';

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
        additionalMessage.value = 'Ijodiy videolar kiritilmagan yoki mavjud emas'
        errorImage.value = ErrorIMG
    }
}

onMounted(fetchUserData)
</script>

<style lang="scss" scoped></style>