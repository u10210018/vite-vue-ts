<script setup lang="ts">
import InputPhone from '@/components/InputPhone.vue'
import type { PhoneNumber } from 'libphonenumber-js'

const phoneResult = ref<PhoneNumber | undefined>()
const isPhoneValid = ref<boolean>(false)

const updatePhoneValid = (phone: PhoneNumber | undefined, isValid: boolean) => {
  phoneResult.value = phone ? phone : undefined
  isPhoneValid.value = isValid
}
</script>

<template>
  <div class="container py-20 text-p">
    <h1 class="text-h4">手機號碼驗證元件</h1>
    <div class="py-4">
      <InputPhone @update-phone="updatePhoneValid" />
    </div>
    <div>
      <div>
        <div class="text-h5">驗證結果</div>
        <pre>{{ phoneResult }}</pre>
      </div>
      <hr class="my-10" />
      <div>
        <div class="text-h5">格式是否正確</div>
        <div v-if="phoneResult && phoneResult.nationalNumber">{{ isPhoneValid ? '正確' : '錯誤' }}</div>
        <div v-else>尚未輸入</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
