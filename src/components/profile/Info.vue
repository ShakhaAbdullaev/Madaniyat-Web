<template>

    <div class="container mt-40 mb-5">

        <div class="p-7 bg-bgDarkBlue rounded-md flex justify-between items-end">

            <div class="flex gap-6 items-center">

                <div>

                    <img src="../../assets/icons/User.svg" alt="" width="120" height="120" class="rounded-md bg-darkBlue py-2 px-2">

                </div>

                <div>
                    <p class="text-white text-3xl font-bold ">{{ user.person.nameLatin }} {{ user.person.surnameLatin }}
                    </p>

                    <p class="text-customGrey ">FrontEnd Developer</p>
                </div>

            </div>

            <div class="flex gap-4">

                <Button class="bg-red-700 hover:bg-red-500 text-white mt-6 flex items-center gap-2" @click="handleExit">Chiqish</Button>

                <Button class="bg-purple hover:bg-primary text-white mt-6 flex items-center gap-2">Tahrirlash<img src="../../assets/icons/edit.svg" alt=""></Button>


            </div>

        </div>

    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import {useRouter} from 'vue-router'
import Button from '../ui-components/Button.vue';
import AccountService from '../../service/account.js'

const user = ref({
    person:{
        nameLatin: '',
        surnameLatin: '',
    }
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

const router = useRouter()

const handleExit = async () => {
        try {
            await AccountService.Logout()
            router.push('/')
        } catch (error) {
            console.error('Error during logout:', error)
        }
    }

</script>

<style scoped></style>