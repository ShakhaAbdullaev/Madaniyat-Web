<template>
    <div class="w-auto grow">
        <h1 class="text-white text-lg font-bold mb-5">Shaxsiy ma’lumotlari</h1>

        <hr class="border border-1 border-grey opacity-20 mb-5">

        <div class="flex gap-4">

            <div class="w-full">

                <p class="text-white font-medium mb-2">Ismi</p>

                <p
                    class="bg-bgDarkBlue py-[10px] px-[16px] rounded-md outline-none border border-1 border-[#334257] text-white mb-5">
                    {{ userInfo.person.nameLatin }}</p>

                <p class="text-white font-medium mb-2">Otasining ismi</p>

                <p
                    class="bg-bgDarkBlue py-[10px] px-[16px] rounded-md outline-none border border-1 border-[#334257] text-white mb-5">
                    {{ userInfo.person.patronymLatin }}</p>


                <p class="text-white font-medium mb-2">Telefon raqami</p>

                <p
                    class="bg-bgDarkBlue py-[10px] px-[16px] rounded-md outline-none border border-1 border-[#334257] text-white mb-5">
                    {{ userInfo.userName }}</p>

                <p class="text-white font-medium mb-2">Pasport seriyasi</p>

                <p
                    class="bg-bgDarkBlue py-[10px] px-[16px] rounded-md outline-none border border-1 border-[#334257] text-white mb-5">
                    {{ userInfo.person.passportSeria }}</p>

            </div>

            <div class="w-full">

                <p class="text-white font-medium mb-2">Familya</p>

                <p
                    class="bg-bgDarkBlue py-[10px] px-[16px] rounded-md outline-none border border-1 border-[#334257] text-white mb-5">
                    {{ userInfo.person.surnameLatin }}</p>

                <p class="text-white font-medium mb-2">Tugilgan sana</p>

                <p
                    class="bg-bgDarkBlue py-[10px] px-[16px] rounded-md outline-none border border-1 border-[#334257] text-white mb-5">
                    {{ userInfo.person.birthDate }}</p>

                <p class="text-white font-medium mb-2">PINFL</p>

                <p
                    class="bg-bgDarkBlue py-[10px] px-[16px] rounded-md outline-none border border-1 border-[#334257] text-white mb-5">
                    {{ userInfo.pinfl }}</p>

                <p class="text-white font-medium mb-2">Pasport raqami</p>

                <p
                    class="bg-bgDarkBlue py-[10px] px-[16px] rounded-md outline-none border border-1 border-[#334257] text-white mb-5">
                    {{ userInfo.person.passportNumber }}</p>

            </div>

        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AccountService from '../../service/account.js';

const userInfo = ref({
    pinfl: '',
    userName: '',
    person: {
        nameLatin: '',
        surnameLatin: '',
        patronymLatin: '',
        birthDate: '',
        passportSeria: '',
        passportNumber: '',
    }
});


const fetchUserInfo = async () => {
    try {
        const response = await AccountService.GetUserInfo();
        userInfo.value = response.data;
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
};


onMounted(fetchUserInfo)
</script>

<style scoped></style>