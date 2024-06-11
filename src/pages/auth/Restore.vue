<template>

    <div class="flex gap-20">

        <div class="w-4/10 pt-5 pl-[50px]">

            <div class="flex gap-4 items-center mb-36">

                <router-link to="/"><img src="../../assets/Main_logo.svg" alt="Logo"></router-link>

                <p class="text-white text-xl font-bold">Ko‘cha san’ati</p>

            </div>

            <form class="flex flex-col" @submit.prevent="onhandleSubmit">

                <p class="text-3xl text-white font-bold mb-2">Parolni tiklash</p>

                <p class="text-base text-textGrey mb-6">Ro’yxatdan o’tgan telefon raqamingizni kiriting, kod yuboriladi</p>

                <div class="flex flex-col mb-7 form-group">

                    <label for="phoneNumber" class="text-sm text-white font-semibold mb-2">Telefon raqam</label>
                    <Input type="number" autocomplete="off" id="phoneNumber" placeholder="Telefon raqamingizni kiriting"
                        v-model="phoneNumber" v-bind="phoneNumberAttrs" />
                    <span v-if="errors['phoneNumber']" class="error">{{ errors['phoneNumber'] }}</span>

                </div>

                <div class="">

                    <Button class="hover:bg-primary w-full mb-6 bg-purple">Sms kod olish</Button>

                </div>

            </form>

        </div>

        <div class="flex-1">

            <img src="../../assets/restoreBG.png" alt="" class="">

        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import Input from '../../components/ui-components/Input.vue'
import Button from '../../components/ui-components/Button.vue'
import { vMaska } from "maska/vue"
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'

const isFormSubmitted = ref(false)

const schema = toTypedSchema(yup.object({
    phoneNumber: yup.string().required('Telefon raqamingizni kiriting'),
    password: yup.string().min(6, 'Kamida 6ta belgidan iborat bo\'lishi kerak').required('Parolni kiriting'),
}))

const { errors, defineField, handleSubmit } = useForm({
    validationSchema: schema
})

const [phoneNumber, phoneNumberAttrs] = defineField('phoneNumber')
const [password, passwordAttrs] = defineField('password')

const onhandleSubmit = handleSubmit(async(values) => {
    try {
        await validate();
        isFormSubmitted.value = true;
    } catch (error) {
        alert.error('Validation error:', error);
    }
})


</script>

<style scoped>
.form-group {
    position: relative;
}

.form-group .error {
    position: absolute;
    bottom: -25px;
    left: 0;
    color: red;
    font-size: 16px;
    font-weight: 500;
}

.form-group:has(.error) input {
    border-color: red;
}
</style>