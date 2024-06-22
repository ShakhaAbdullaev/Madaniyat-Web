<template>

    <div class="flex gap-20">

        <div class="w-4/10 pt-5 pl-[50px]">

            <div class="flex gap-4 items-center mb-40">

                <router-link to="/"><img src="../../assets/Main_logo.svg" alt="Logo"></router-link>

                <p class="text-white text-xl font-bold">Ko‘cha san’ati</p>

            </div>

            <form class="flex flex-col" @submit.prevent="onhandleSubmit">

                <p class="text-3xl text-white font-bold mb-2">Tasdiq kod</p>

                <p class="text-base text-textGrey mb-6"><span class="text-primary font-semibold">{{ formattedPhoneNumber
                        }}</span>
                    raqamiga yuborilgan kodni kiriting </p>

                <div class="flex flex-col mb-10 form-group">

                    <Input type="number" autocomplete="off" id="smscode" placeholder="SMS kodni kiriting"
                        v-model="SMSCode" v-bind="SMSCodeAttrs" />
                    <span v-if="errors['SMSCode']" class="error">{{ errors['SMSCode'] }}</span>
                    <span v-if="apiError" class="error">{{ apiError }}</span>

                </div>

                <div class="">

                    <Button class="hover:bg-primary w-full mb-6 bg-purple text-white">Tasdiqlash</Button>

                </div>

            </form>

        </div>

        <div class="flex-1">

            <img src="../../assets/fullsignup.png" alt="" class="">

        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Input from '../../components/ui-components/Input.vue'
import Button from '../../components/ui-components/Button.vue'
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'
import AccountService from '../../service/account.js'


const route = useRoute();
const router = useRouter();
const formattedPhoneNumber = ref(route.params.formattedPhoneNumber);
const smsCode = ref('')
const apiError = ref('')

const schema = toTypedSchema(yup.object({
    SMSCode: yup.string().required('SMS kodni kiriting').matches(/^\d{4}$/, 'SMS kod 4 raqamdan iborat bo‘lishi kerak'),
}))

const { errors, defineField, handleSubmit } = useForm({
    validationSchema: schema
})

const [SMSCode, SMSCodeAttrs] = defineField('SMSCode')

const onhandleSubmit = handleSubmit(async (values) => {
    try {
        apiError.value = ''; 
        const response = await AccountService.CheckSMSCode({
            phoneNumber: formattedPhoneNumber.value,
            smsCode: values.SMSCode
        });

        // Assuming the response contains a status or success flag
        if (response.data.success) {
            router.push('/userAdd');
        } else {
            apiError.value = 'SMS kod noto‘g‘ri. Iltimos, qayta urinib ko‘ring.';
        }
    } catch (error) {
        console.error('Validation error:', error);
        apiError.value = 'SMS kodini tekshirishda xatolik yuz berdi. Iltimos, yana bir bor urinib ko\'ring.';
    }
});

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