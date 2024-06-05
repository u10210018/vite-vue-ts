import parsePhoneNumber, {
  getCountryCallingCode,
  type CountryCallingCode,
  type CountryCode,
  type PhoneNumber,
} from 'libphonenumber-js'
import type { MaybeRef, Ref } from 'vue'

interface UsePhoneRes {
  phoneNumber: Ref<PhoneNumber | undefined>
  isValid: Ref<boolean>
  countryCallingCode: Ref<CountryCallingCode>
}

export const usePhone = (phone: MaybeRef<string>, country: MaybeRef<CountryCode>): UsePhoneRes => {
  const phoneNumber = computed<PhoneNumber | undefined>(() => {
    return parsePhoneNumber(unref(phone), unref(country)) || undefined
  })

  const isValid = computed<boolean>(() => {
    return phoneNumber.value?.isValid() || false
  })

  const countryCallingCode = computed<CountryCallingCode>(() => {
    return getCountryCallingCode(unref(country))
  })

  return {
    phoneNumber,
    isValid,
    countryCallingCode,
  }
}
