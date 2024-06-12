<template>

    <div class="container mt-40 mb-5">

        <div class="p-7 bg-bgDarkBlue rounded-md flex justify-between items-end">

            <div class="flex gap-6 items-center">

                <div>

                    <img src="../../assets/avatar3.JPG" alt="" width="120" height="120" class="rounded-md">

                </div>

                <div>
                    <p class="text-white text-3xl font-bold ">{{ user.fullName }}
                    </p>

                    <p class="text-customGrey ">FrontEnd Developer</p>
                </div>

            </div>

            <div>

                <Button class="bg-purple hover:bg-primary text-white mt-6 flex items-center gap-2">Tahrirlash<img
                        src="../../assets/icons/edit.svg" alt=""></Button>

            </div>

        </div>

    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import Button from '../ui-components/Button.vue';
import AccountService from '../../service/account.js'

const user = ref({
    name: '',
})

const fetchUserData = async () => {
    try {
        const response = await AccountService.GetUserInfo()
        user.value = response.data
    } catch (error) {
        console.error('Error fetching user data:', error)
    }
}

onMounted(fetchUserData)

</script>

<style scoped></style>