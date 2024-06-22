<template>
    <Navbar />

    <div class="container my-32">

        <div class="py-5 px-7 bg-bgDarkBlue relative rounded-md">

            <p class="text-white font-bold text-xl mb-4">Ishtorokchi ma'lumotlari</p>

            <hr class="border border-1 border-grey opacity-20 mb-5">

            <form class="flex justify-between items-end" @submit.prevent="fetchUserInfo">

                <div class="flex gap-5">

                    <div class="flex flex-col">

                        <label for="passportSeria" class="text-white  font-semibold mb-2">Pasport seriyasi</label>

                        <Input type="text" name="passportSeria" placeholder="AA" maxlength="2"
                            class=" bg-darkBlue uppercase" v-model="passportSeria" />

                    </div>

                    <div class="flex flex-col">

                        <label for="passportNumber" class="text-white font-semibold mb-2">Pasport raqami</label>

                        <Input type="text" maxlength="7" name="passportNumber" placeholder="XXXXXXX"
                            v-model="passportNumber" class="bg-darkBlue" />

                    </div>

                    <div class="flex flex-col relative">

                        <label for="birthDate" class="text-white font-semibold mb-2">Tug'ilgan sana</label>

                        <Input type="date" v-model="birthDate" class="bg-darkBlue" />

                    </div>

                </div>

                <div>

                    <Button class="bg-purple text-white font-semibold flex gap-1 items-center hover:bg-primary"
                        type="submit">Qidiruv<img src="../../assets/icons/Search.svg" alt="#"
                            class="text-white"></Button>

                </div>

            </form>

        </div>

        <div v-if="searched">
            <div v-if="userInfo" class="bg-bgDarkBlue p-5">
                <div class="w-auto grow mt-5 flex gap-5">
                    <div class="w-full">
                        <p class="text-white font-medium mb-2">Ismi</p>
                        <p
                            class="bg-darkBlue py-[10px] px-[16px] rounded-md outline-none border border-1 border-[#334257] text-white mb-5">
                            {{ userInfo.person.nameLatin }}
                        </p>
                        <p class="text-white font-medium mb-2">Otasining ismi</p>
                        <p
                            class="bg-darkBlue py-[10px] px-[16px] rounded-md outline-none border border-1 border-[#334257] text-white mb-5">
                            {{ userInfo.person.patronymLatin }}
                        </p>
                    </div>
                    <div class="w-full">
                        <p class="text-white font-medium mb-2">Familya</p>
                        <p
                            class="bg-darkBlue py-[10px] px-[16px] rounded-md outline-none border border-1 border-[#334257] text-white mb-5">
                            {{ userInfo.person.surnameLatin }}
                        </p>
                        <p class="text-white font-medium mb-2">Tugilgan sana</p>
                        <p
                            class="bg-darkBlue py-[10px] px-[16px] rounded-md outline-none border border-1 border-[#334257] text-white mb-5">
                            {{ userInfo.person.birthDate }}
                        </p>
                    </div>
                </div>
                <Button @click="registerUser" class="bg-purple text-white font-semibold mt-3">Saqlash</Button>
            </div>

            <div v-else>

                <div class="bg-bgDarkBlue py-5">

                    <div class="flex items-center justify-center">

                        <img src="../../assets/icons/data.svg" alt="NoData" class="">

                    </div>

                    <p class="flex justify-center text-white font-semibold text-2xl">
                        Davlat personallashtirish markazidan ma'lumot topilmadi!
                    </p>

                </div>

            </div>

        </div>

    </div>

    <Footer />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../../layouts/Navbar.vue';
import Footer from '../../layouts/Footer.vue';
import Input from '../../components/ui-components/Input.vue';
import Button from '../../components/ui-components/Button.vue';
import AccountService from '../../service/account.js'

const router = useRouter();

const passportSeria = ref('');
const passportNumber = ref('');
const birthDate = ref('');
const userInfo = ref(null);
const searched = ref(false);

const validateFormData = () => {
    if (!passportSeria.value || !passportNumber.value || !birthDate.value) {
        alert('Hamma kataklarni to\'ldiring.');
        return false;
    }
    return true;
};

const formatDateToBackend = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    return `${day}.${month}.${year}`;
};

const fetchUserInfo = async () => {
    if (!validateFormData()) return;
    try {
        const response = await AccountService.GetByPassportData({
            document: (passportSeria.value + passportNumber.value).toUpperCase(),
            birthDate: formatDateToBackend(birthDate.value),
        });
        userInfo.value = response.data;
    } catch (error) {
        console.error('Error fetching user info:', error);
        userInfo.value = null;
    } finally {
        searched.value = true;
    }
};

const registerUser = async () => {
    if (!userInfo.value) {
        alert('No user information to register.');
        return;
    }
    try {
        const response = await AccountService.Register({
            person: {
                id: userInfo.value.person.id,
                shortName: userInfo.value.person.shortName,
                fullName: userInfo.value.person.fullName,
                pinfl: userInfo.value.person.pinfl,
                passportSeria: userInfo.value.person.passportSeria,
                passportNumber: userInfo.value.person.passportNumber,
                passportDate: userInfo.value.person.passportDate,
                passportExpiration: userInfo.value.person.passportExpiration,
                surnameLatin: userInfo.value.person.surnameLatin,
                nameLatin: userInfo.value.person.nameLatin,
                patronymLatin: userInfo.value.person.patronymLatin,
                surnameEng: userInfo.value.person.surnameEng,
                nameEng: userInfo.value.person.nameEng,
                birthDate: userInfo.value.person.birthDate,
                genderId: userInfo.value.person.genderId,
                passportDivName: userInfo.value.person.passportDivName,
                birthCountryId: userInfo.value.person.birthCountryId,
                nationalityId: userInfo.value.person.nationalityId,
                citizenshipId: userInfo.value.person.citizenshipId,
                livingRegionId: userInfo.value.person.livingRegionId,
                livingDistrictId: userInfo.value.person.livingDistrictId
            },
            email: userInfo.value.email,
            personId: userInfo.value.personId,
            fullName: userInfo.value.fullName,
            shortName: userInfo.value.shortName
        });

        if (response.data) {
            router.push('/user');
        } else {
            alert('Registration failed.');
        }
    } catch (error) {
        console.error('Error registering user:', error);
    }
};
</script>

<style scoped></style>