<script setup lang="ts">
import { usePhone } from '@/composable/usePhone'
import type { CountryCode, PhoneNumber } from 'libphonenumber-js'

import InputPhoneCountry from '@/components/InputPhoneCountry.vue'

const emits = defineEmits<{
  'update-phone': [phone: PhoneNumber | undefined, isValid: boolean]
}>()

const phoneValue = ref<string>('')
const countryCode = ref<CountryCode>('TW')

const { phoneNumber, isValid } = usePhone(phoneValue, countryCode)

watch(
  () => [phoneValue.value, countryCode.value],
  () => {
    emits('update-phone', phoneNumber.value, isValid.value)
  }
)

const isNumber = (evt: KeyboardEvent): true | undefined => {
  const charCode = evt.which ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    evt.preventDefault()
  } else {
    return true
  }
}
</script>

<template>
  <div class="flex w-fit items-center gap-2 rounded-md border border-gray-600">
    <div>
      <InputPhoneCountry @update-country="countryCode = $event.country">
        <template #trigger="{ country, clickHandler }">
          <button type="button" class="grid place-content-center pl-3 pr-1 text-start" @click="clickHandler()">
            <div class="size-6">
              <img :src="country.icon" class="size-full object-contain" :alt="country.country" />
            </div>
          </button>
        </template>
      </InputPhoneCountry>
    </div>
    <span class="h-[15px] w-px bg-gray-600"></span>
    <input
      type="text"
      v-model.trim="phoneValue"
      placeholder="請輸入電話號碼"
      class="appearance-none bg-transparent py-1.5 pl-1 pr-2 focus:outline-none rounded-md"
      name="phone"
      @keypress="isNumber($event)"
    />
  </div>
</template>

<style scoped lang="scss">
/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
</style>
